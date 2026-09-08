import { gameManager } from '../../App'
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/BeeBranchUpgrade'

export default class BeeManager
{
	BranchUpgrade = null
	Cooldown = 0
	MaxCooldown = 2

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		this.Reset()
		
    	this.image = new Image();
   		this.image.src = `/assets/Bees/honeycomb.png`;
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};
	}

	Update(deltaTime)
	{
		if(this.Level == 0)
			return;
		
		if(!this.ImageLoaded)
			return;

    	this.context.drawImage(this.image, 480, 340, 128, 128);

		this.Cooldown -= deltaTime

		if(this.Cooldown <= 0)
			this.CollectFruit()
	}

	CollectFruit()
	{
		this.Cooldown += this.MaxCooldown

		for (let i = 0; i < gameManager.PrestigeManager.GetBeesPrestigeModifier(); i++) 
		{
			gameManager.StatisticsManager.GlobalStats.FruitsCollectedByBees += 1
			gameManager.fruitManager.FruitsSpawners.toSorted(function(x, y) {return x.FruitsSpawned.length - y.FruitsSpawned.length }).toReversed()[0].CollectFruit()
		}
	}

	Upgrade()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.StatisticsManager.GlobalStats.TotalBeesUpgrades += 1
		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.MaxCooldown -= 0.01
		this.Level += 1

		if(this.Level == 25)
			this.BranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}

	Reset()
	{
		this.Level = 0
		this.UpgradePrice = 1

		this.BranchUpgradeId = 1
		this.BranchUpgrade = null

		this.Cooldown = 0
		this.MaxCooldown = 2
	}
}