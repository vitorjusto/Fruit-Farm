import { gameManager } from '../../../App'
import { useState } from 'react'

class Vector2
{
	X;
	Y;

	constructor(x, y)
	{
		this.X = x,
		this.Y = y
	}
}

export default class FruitSpawner
{
	context;
	canvas;

	Fruit;
	SpawnCooldown = 0;
	MaxSpawnCooldown = 6; //In Seconds
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
	MaxSize = 100

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

	Update(deltaTime)
	{
		this.SpawnCooldown -= deltaTime

		if(this.SpawnCooldown <= 0 && this.MaxSize > this.FruitsSpawned.length)
		{
			this.SpawnCooldown += this.MaxSpawnCooldown;
			this.FruitsSpawned.push(new Fruit(this.context, 
											  this.MinSpawnPosition.X + (Math.random() * this.TreeSize.X), 
											  this.MinSpawnPosition.Y + (Math.random() * this.TreeSize.Y)))
		}

		this.FruitsSpawned.forEach(element => {
			element.DrawFruit(this.BranchUpgradeId)
		});
	}

	
	HarvestFruits()
	{
		var total = this.FruitsSpawned.length * this.SellingPrice
		this.FruitsSpawned = []

		return total
	}

	UpgradeFruit()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.SellingPrice += 2
		this.Level += 1
		this.MaxSpawnCooldown -= 0.01

		if(this.Level == 15)
			gameManager.fruitManager.FruitsSpawners.push(new FruitSpawner(this.context, this.canvas, 'Apple23', 1, 'Simple fruit, simple price', 3, 1, this.FruitId + 1))

		if(this.Level == 25)
			this.AvailableBranchUpgrade = new BranchUpgradeCollection(
		new BranchUpgrade(2, "More BIG", "a fruta possui mais espaço e o preço de venda fica bem maior (comparado com More delicius), com o tempo de aparência bem maior também"),
		new BranchUpgrade(3, "More Delicius", "as frutas dão mais valor de venda com o preço de upgrade aumenta um pouco"),
		new BranchUpgrade(4, "More Genetic", "as frutas tem menos espaço e menos tempo de coowldown e menos preço de venda"),
		)
	}

	UpdateBranchUpgrade(id)
	{
		ChangeFruitBranchUpgrade(this, id)
	}
}

function ChangeFruitBranchUpgrade(fruitSpawner, id)
{
	fruitSpawner.BranchUpgradeId = id
	fruitSpawner.AvailableBranchUpgrade = null;

	if(id == 2)//More BIG
	{
		fruitSpawner.MaxSpawnCooldown *= 3
		fruitSpawner.MaxSize /= 2
		fruitSpawner.SellingPrice *= 3
	}else if(id == 3)//More Delicius
	{
		fruitSpawner.SellingPrice *= 1.5
		fruitSpawner.UpgradePrice *= 1.5
	}else if(id == 4)//More Genetic
	{
		fruitSpawner.MaxSpawnCooldown /= 1.5
		fruitSpawner.MaxSize *= 2
		fruitSpawner.SellingPrice /= 1.5
	}
}

export class Fruit
{
	context;
	X;
	Y;
	image;
	ImageLoaded;

	constructor(context, x, y)
	{
		this.context = context;
		this.X = x;
		this.Y = y;
    	this.image = new Image();
   		this.image.src = "/assets/Fruits/Apple.png"; // ou uma URL
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};
	}

	DrawFruit(branchUpgradeId)
	{
		if(!this.ImageLoaded)
			return;

		var sx = Math.floor((branchUpgradeId - 1)% 6) * 32
		var sy = Math.floor((branchUpgradeId - 1)/ 6) * 32
    	this.context.drawImage(this.image, sx, sy, 32, 32, this.X, this.Y, 64, 64);
	}
}

export class BranchUpgradeCollection
{
	Upgrade1;
	Upgrade2;
	Upgrade3;

	constructor(upgrade1, upgrade2, upgrade3)
	{
		this.Upgrade1 = upgrade1;
		this.Upgrade2 = upgrade2;
		this.Upgrade3 = upgrade3;

	}
}

export class BranchUpgrade
{
	BranchUpgradeId;
	Name;
	Description;

	constructor(BranchUpgradeId, Name, Description)
	{
		this.BranchUpgradeId = BranchUpgradeId;
		this.Name = Name;
		this.Description = Description;
	}
}