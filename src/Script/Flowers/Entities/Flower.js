import {ChangeFlowerBranchUpgrade, GetBranchUpgradeCollection} from '../../BranchUpgrade/Functions/FlowerBranchUpgrade'
import { gameManager } from '../../../App'

export default class Flower
{
	MoneyPerSecond=0.5;
	AddMoney;
	X;
	Y;
	BranchUpgradeId = 1
	AvailableBranchUpgrade = null;

	constructor(AddMoney, context, id)
	{
		this.context = context;
		this.Id = id
		this.FlowerName = "Daisy"
		this.Description = "Descrição"
		this.Level = 1
		this.SellingPrice = 10
		this.UpgradePrice = 3

		this.ChangeImage(this.Level)
		this.AddMoney = AddMoney

		if(this.Id == 1)
		{
			this.X = 650;
			this.Y = 480;
		}else if(this.Id == 2)
		{
			this.X = 850;
			this.Y = 480;
		}
	}

	ChangeImage(level)
	{
		
    	this.image = new Image();
		if(level >= 100)
   			this.image.src = "/assets/Flowers/Daisy/Daisy100.png";
		else if(level > 89)
   			this.image.src = "/assets/Flowers/Daisy/Daisy90-99.png";
		else if(level > 79)
   			this.image.src = "/assets/Flowers/Daisy/Daisy80-89.png";
		else if(level > 69)
   			this.image.src = "/assets/Flowers/Daisy/Daisy70-79.png";
		else if(level > 59)
   			this.image.src = "/assets/Flowers/Daisy/Daisy60-69.png";
		else if(level > 49)
   			this.image.src = "/assets/Flowers/Daisy/Daisy50-59.png";
		else if(level > 39)
   			this.image.src = "/assets/Flowers/Daisy/Daisy40-49.png";
		else if(level > 29)
   			this.image.src = "/assets/Flowers/Daisy/Daisy30-39.png";
		else if(level > 19)
   			this.image.src = "/assets/Flowers/Daisy/Daisy20-29.png";
		else if(level > 9)
   			this.image.src = "/assets/Flowers/Daisy/Daisy10-19.png";
		else
   			this.image.src = "/assets/Flowers/Daisy/Daisy1-9.png";

    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};
	}

	GetMoneyPerSecond()
	{
		return this.MoneyPerSecond * gameManager.PrestigeManager.GetflowerValuePrestigeModifier()
	}

	Update(deltaTime)
	{
		this.AddMoney(this.GetMoneyPerSecond() * deltaTime)
		
		if(!this.ImageLoaded)
			return;

		var sx = Math.floor((this.BranchUpgradeId - 1)% 6) * 32
		var sy = Math.floor((this.BranchUpgradeId - 1)/ 6) * 32

    	this.context.drawImage(this.image, sx, sy, 32, 32, this.X, this.Y, 64, 64);
	}
	
	UpgradeFlower()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.SellingPrice += 2
		this.Level += 1
		this.MoneyPerSecond += 0.01

		if(this.Level % 10 == 0)
			this.ChangeImage(this.Level)

		if(this.Level == 25)
			this.AvailableBranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}

	UpdateBranchUpgrade(id)
	{
		ChangeFlowerBranchUpgrade(this, id)
	}
}