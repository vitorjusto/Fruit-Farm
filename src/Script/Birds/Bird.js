import { gameManager } from "../../App";
import { EMissionType } from "../Missions/Enums/EMissionType";
import MissionAction from "../Missions/Entities/MissionAction";

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

    	this.image = new Image();
   		this.image.src = `/assets/Birds/Bird.png`;
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};

		this.AnimationCooldown = 0.2;
		this.sy = 0
	}

	Update(deltaTime)
	{
		if(this.queueDespawn)
			return;

		if(!this.ImageLoaded)
			return;

		this.AnimationCooldown -= deltaTime

		if(this.AnimationCooldown <= 0)
		{
			this.sy = this.sy == 0? 32: 0;
			this.AnimationCooldown+= 0.2
		}

		this.X += this.xSpeed * deltaTime
		this.Y += this.ySpeed * deltaTime

		this.DrawImage()
		if(this.X < -200 || this.X > this.canvas.width + 200)
			this.queueDespawn = true;
	}

	DrawImage()
	{

		this.context.save();
		this.context.translate(this.xSpeed > 0? 0: this.canvas.width, 0);
		this.context.scale(this.xSpeed > 0? 1: -1, 1);

    	this.context.drawImage(this.image, 0, this.sy, 32, 32, this.xSpeed > 0?this.X: this.canvas.width - this.X, this.Y, 64, 64);
		this.context.restore();

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

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.BirdsTakendown, 0, 1))
		
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