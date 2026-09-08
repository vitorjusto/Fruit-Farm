import { gameManager } from '../../../App'
import { useState } from 'react'
import Fruit from './Fruit'
import Vector2 from '../../Shareds/ValueObjects/Vector2'
import {ChangeFruitBranchUpgrade, GetBranchUpgradeCollection} from '../../BranchUpgrade/Functions/FruitBranchUpgrade'
import {GetNextFruit} from '../Factories/FruitFactory'
import MissionAction from '../../Missions/Entities/MissionAction'
import { EMissionType } from '../../Missions/Enums/EMissionType'

export default class FruitSpawner
{
	context;
	canvas;

	Fruit;
	SpawnCooldown = 0;
	MaxSpawnCooldown = 1; //In Seconds
	FruitsSpawned = [];

	MinSpawnPosition = new Vector2(200, 80)
	TreeSize = new Vector2(800, 300)

	FruitName = ''
	Level = 1
	Description = ''
	SellingPrice = 2
	UpgradePrice = 10
	AvailableBranchUpgrade = null;
	FruitId = 0
	BranchUpgradeId = 1
	Size = 1

	onBranchUpdatedEvent = () => {}

	constructor(context, canvas, fruitName, level, description, sellingPrice, upgradePrice, fruitId)
	{
		this.context = context
		this.canvas = canvas
		this.SpawnCooldown = this.MaxSpawnCooldown;
		this.FruitName = fruitName
		this.Level = level
		this.Description = description
		this.SellingPrice = sellingPrice
		this.UpgradePrice = upgradePrice
		this.FruitId = fruitId
	}

	GetSpawnTimer()
	{
		return this.MaxSpawnCooldown / gameManager.treeManager.GetFruitSpawnModifier()
	}

	Update(deltaTime)
	{

		this.SpawnCooldown -= deltaTime
		if(this.SpawnCooldown <= 0)
		{
			this.SpawnCooldown += this.GetSpawnTimer();

			if((gameManager.treeManager.Size / this.Size) > this.FruitsSpawned.length)
				this.FruitsSpawned.push(new Fruit(this.context, 
											  this.MinSpawnPosition.X + (Math.random() * this.TreeSize.X), 
											  this.MinSpawnPosition.Y + (Math.random() * this.TreeSize.Y),
												this.FruitName))
		}

		this.FruitsSpawned.forEach(element => {
			element.DrawFruit(this.BranchUpgradeId)
		});
	}

	GetSellingPrice()
	{
		return this.SellingPrice * gameManager.PrestigeManager.GetFruitValuePrestigeModifier()
	}

	HarvestFruits()
	{
		var total = this.FruitsSpawned.length * this.GetSellingPrice()
		gameManager.PrestigeManager.AddFruitSellCount(this.FruitsSpawned.length)

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.CollectFruit, 0, this.FruitsSpawned.length))
		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.CollectEspecificFruit, this.FruitId, this.FruitsSpawned.length))

		gameManager.StatisticsManager.GlobalStats.FruitSold(total, this.FruitsSpawned.length)

		this.FruitsSpawned = []

		return total
	}

	CollectFruit()
	{
		if(this.FruitsSpawned.length == 0)
			return;

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.CollectFruit, 0, 1))
		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.CollectEspecificFruit, this.FruitId, 1))
		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.FruitCollectedByBees, 0, 1))

		gameManager.StatisticsManager.GlobalStats.FruitSold(this.GetSellingPrice(), 1)

		this.FruitsSpawned.shift()
		gameManager.AddMoney(this.GetSellingPrice())
		gameManager.PrestigeManager.AddFruitSellCount(1)
	}

	UpgradeFruit()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.AddMoney(-this.UpgradePrice)

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.UpgradeAllFruit, 0, 1))
		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.UpgradeFruit, this.FruitId, 1))

		gameManager.StatisticsManager.GlobalStats.TotalFruitsUpgrades += 1

		this.UpgradePrice += 1
		this.SellingPrice += 2
		this.Level += 1
		this.MaxSpawnCooldown -= 0.01

		if(this.Level == 15)
			gameManager.fruitManager.FruitsSpawners.push(GetNextFruit(this.FruitId, this.context, this.canvas))

		if(this.Level == 25)
			this.AvailableBranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}

	UpdateBranchUpgrade(id)
	{
		gameManager.StatisticsManager.GlobalStats.TotalFruitsBranchUpgrades += 1
		ChangeFruitBranchUpgrade(this, id)
		this.onBranchUpdatedEvent()
	}
}