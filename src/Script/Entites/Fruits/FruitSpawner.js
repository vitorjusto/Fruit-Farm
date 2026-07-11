
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
	MaxSpawnCooldown = 1; //In Seconds
	FruitsSpawned = [];

	MinSpawnPosition = new Vector2(200, 80)
	TreeSize = new Vector2(800, 300)

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas
		this.SpawnCooldown = this.MaxSpawnCooldown;
		this.FruitsSpawned.push(new Fruit(this.context, this.MinSpawnPosition.X, this.MinSpawnPosition.Y))
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