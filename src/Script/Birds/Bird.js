import { gameManager } from "../../App";

export default class Bird
{
	context;
	X;
	Y;

	constructor(context, canvas, x, y, xSpeed, ySpeed)
	{
		this.context = context;
		this.canvas = canvas;

		this.X = x;
		this.Y = y;
		this.Size = 50

		this.xSpeed = xSpeed
		this.ySpeed = ySpeed

		this.queueDespawn = false
	}

	Update(deltaTime)
	{
		if(this.queueDespawn)
			return;

		this.context.fillStyle = "Blue"

		this.X += this.xSpeed * deltaTime
		this.Y += this.ySpeed * deltaTime

		this.context.fillRect(this.X, this.Y, this.Size, this.Size);

		if(this.X < -200 || this.X > this.canvas.width + 200)
			this.queueDespawn = true;
	}

	VerifyClick(x, y)
	{
		if(this.queueDespawn)
			return;

		console.log(`click: (${x}, ${y}), bird: (${this.X}, ${this.Y})`)

		if(this.X - this.Size > x)
			return;

		if(this.X + (this.Size * 2)  < x)
			return;

		if(this.Y - this.Size > y)
			return;

		if(this.Y + (this.Size * 2) < y)
			return;

		this.queueDespawn = true

		this.GiveReward()
	}

	GiveReward()
	{
		var rng = Math.random() * 100;

		if(rng < 20)
			gameManager.seedManager.AddGreenSeed(2)
		else if(rng < 40)
			gameManager.seedManager.AddOrangeSeed(2)
		else if(rng < 60)
			gameManager.seedManager.AddBlueSeed(2)
		else if(rng < 80)
			gameManager.seedManager.AddPinkSeed(2)
		else if(rng < 93)
			gameManager.seedManager.AddGoldSeed(2)
		else 
			gameManager.seedManager.AddRareSeed(2)
	}
}