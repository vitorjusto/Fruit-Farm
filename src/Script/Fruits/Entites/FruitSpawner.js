import { gameManager } from '../../../App'
import { useState } from 'react'
import Fruit from './Fruit'
import Vector2 from '../../Shareds/ValueObjects/Vector2'
import {ChangeFruitBranchUpgrade, GetBranchUpgradeCollection} from '../../BranchUpgrade/Functions/FruitBranchUpgrade'
import {GetNextFruit} from '../Factories/FruitFactory'

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
		return this.MaxSpawnCooldown / gameManager.treeManager.FruitSpawnModifier
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

	
	HarvestFruits()
	{
		var total = this.FruitsSpawned.length * this.SellingPrice
		gameManager.PrestigeManager.AddFruitSellCount(this.FruitsSpawned.length)

		this.FruitsSpawned = []

		return total
	}

	CollectFruit()
	{
		if(this.FruitsSpawned.length == 0)
			return;

		this.FruitsSpawned.shift()
		gameManager.AddMoney(this.SellingPrice)
		gameManager.PrestigeManager.AddFruitSellCount(1)
	}

	UpgradeFruit()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.AddMoney(-this.UpgradePrice)

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
		ChangeFruitBranchUpgrade(this, id)
		this.onBranchUpdatedEvent()
	}
}