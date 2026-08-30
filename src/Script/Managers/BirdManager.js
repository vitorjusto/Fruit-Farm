import Bird from "../Birds/Bird"
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/BirdBranchUpgrade'
import { gameManager } from "../../App";
export default class BirdManager
{

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;

		this.maxCooldown = 100;
		this.cooldown = this.maxCooldown;
		this.SeedsAmount = 1;
		this.Birds = [];
		this.UpgradePrice = 10
		this.Level = 0
		this.BranchUpgradeId = 1
	}

	Update(deltaTime)
	{
		this.Birds.forEach(element => {
			element.Update(deltaTime)
		});

		this.Birds = this.Birds.filter(n => !n.queueDespawn);
		this.cooldown -= deltaTime

		if(this.cooldown <= 0)
		{
			this.cooldown = this.maxCooldown ;
			this.SpawnBird()
		}
	}

	SpawnBird()
	{
		
		var xspeed = (150 + (Math.random() * 300)) * (Math.random() > 0.5? 1: -1)
		var x = xspeed < 0?this.canvas.width + 120:-120

		this.Birds.push(new Bird(this.context, this.canvas, x, 100 + (Math.random() * 200), xspeed, (40 * Math.random()) - 20))
	}

	VerifyClick(event)
	{
    	const rect = this.canvas.getBoundingClientRect();
    	const scaleX = this.canvas.width / rect.width;
    	const scaleY = this.canvas.height / rect.height;

    	const x = (event.clientX - rect.left) * scaleX;
    	const y = (event.clientY - rect.top) * scaleY;

		this.Birds.forEach(element => {
			element.VerifyClick(x, y)
		});

		this.Birds = this.Birds.filter(n => !n.queueDespawn);
	}

	Upgrade()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.maxCooldown -= 1
		this.SeedsAmount += 1
		this.Level += 1

		if(this.Level == 25)
			this.BranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}
}