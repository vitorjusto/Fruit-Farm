
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
	AvailableBranchUpgrade = false

	constructor(context, canvas, fruitName, level, description, sellingPrice, upgradePrice)
	{
		this.context = context
		this.canvas = canvas
		this.SpawnCooldown = this.MaxSpawnCooldown;
		this.FruitsSpawned.push(new Fruit(this.context, this.MinSpawnPosition.X, this.MinSpawnPosition.Y))

		this.FruitName = fruitName
		this.Level = level
		this.Description = description
		this.SellingPrice = sellingPrice
		this.UpgradePrice = upgradePrice
	}

	Update(deltaTime)
	{
		this.SpawnCooldown -= deltaTime

		if(this.SpawnCooldown <= 0)
		{
			this.SpawnCooldown += this.MaxSpawnCooldown;
			this.FruitsSpawned.push(new Fruit(this.context, 
											  this.MinSpawnPosition.X + (Math.random() * this.TreeSize.X), 
											  this.MinSpawnPosition.Y + (Math.random() * this.TreeSize.Y)))
		}

		this.FruitsSpawned.forEach(element => {
			element.DrawFruit()
		});
	}

	
	HarvestFruits()
	{
		var total = this.FruitsSpawned.length * this.SellingPrice
		this.FruitsSpawned = []

		return total
	}
}

export class Fruit
{
	context;
	X;
	Y;

	constructor(context, x, y)
	{
		this.context = context;
		this.X = x;
		this.Y = y;
	}

	DrawFruit()
	{
		this.context.fillStyle = "red"
    	this.context.fillRect(this.X, this.Y, 16, 16);
	}
}