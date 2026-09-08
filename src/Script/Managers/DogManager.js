import { gameManager } from '../../App'
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/DogBranchUpgrade'
import { EMissionType } from '../Missions/Enums/EMissionType'
import MissionAction from '../Missions/Entities/MissionAction'
export default class DogManager
{
	BranchUpgrade = null
	ClickValue = 10
	ClickAmount = 10
	MaxClickAmount = 10
	Cooldown = 0
	MaxCooldown = 10

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		this.Reset()
    	this.image = new Image();
   		this.image.src = `/assets/Dog/Dog.png`;
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};

		this.X = 20
		this.Y = 490
	}

	Update(deltaTime)
	{
		if(this.Level == 0)
			return;
		if(!this.ImageLoaded)
			return;

		if(this.Cooldown > 0)
		{
			this.Cooldown -= deltaTime
    		this.context.drawImage(this.image, 0, 32, 32, 32, this.X, this.Y, 64, 64);

		}else
		{
    		this.context.drawImage(this.image, 0, 0, 32, 32, this.X, this.Y, 64, 64);

		}

	}

	Upgrade()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.StatisticsManager.GlobalStats.TotalDogUpgrades += 1
		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.ClickValue += 1
		this.MaxClickAmount += 1
		this.Level += 1

		if(this.Level == 25)
			this.BranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}

	PetDog()
	{
		if(this.Level == 0)
			return 0;

		if(this.Cooldown > 0)
			return 0;

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.PetDog, 0, 1))
		gameManager.StatisticsManager.GlobalStats.AmountofTimeDogWasPet += 1
		gameManager.StatisticsManager.GlobalStats.MoneyGetByDog += this.ClickValue
		
		this.ClickAmount -= 1

		if(this.ClickAmount == 0)
		{
			this.Cooldown = this.MaxCooldown
			this.ClickAmount = this.MaxClickAmount
		}

		return this.ClickValue;
	}

	Reset()
	{
		this.Level = 0
		this.UpgradePrice = 1

		this.BranchUpgradeId = 1
		this.BranchUpgrade = null
		
		this.ClickValue = 10
		this.ClickAmount = 10
		this.MaxClickAmount = 10
		this.Cooldown = 0
		this.MaxCooldown = 10
	}
}