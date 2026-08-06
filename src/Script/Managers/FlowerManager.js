import { gameManager } from '../../App'

export default class FlowerManager
{
	Context;
	Canvas;
	Flowers = [];

	constructor(context, canvas, AddMoney)
	{
		this.Context = context
		this.Canvas = canvas
		this.AddMoney = AddMoney
		this.Flowers = [new Flower(AddMoney, this.Context, 1)]
	}

	Update(deltaTime)
	{
		this.Flowers.forEach(element => {
			element.Update(deltaTime)
		});
	}

	AddFlower(flowerId)
	{
		this.Flowers.push(new Flower(this.AddMoney, this.Context, this.Flowers.length + 1))
	}

	SellFlower(flowerId)
	{
		console.log(flowerId)
		var sellingFlower = this.Flowers.find((x) => x.Id == flowerId);
		gameManager.setMoney(gameManager.money + sellingFlower.SellingPrice)
		
		var newId = 1
		var newFlowerList = []

		for (const flower of this.Flowers) 
		{
			if(flower.Id == flowerId)
				continue;

			flower.Id = newId
			newFlowerList.push(flower)
			newId++;
		}

		this.Flowers = newFlowerList
	}
}

class Flower
{
	MoneyPerSecond=0.5;
	AddMoney;
	X;
	Y;

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

	Update(deltaTime)
	{
		this.AddMoney(this.MoneyPerSecond * deltaTime)
		
		if(!this.ImageLoaded)
			return;

		// var sx = Math.floor((branchUpgradeId - 1)% 6) * 32
		// var sy = Math.floor((branchUpgradeId - 1)/ 6) * 32

		var sx = 0
		var sy = 0
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

		// if(this.Level == 25)
		// 	this.AvailableBranchUpgrade = new BranchUpgradeCollection(
		// new BranchUpgrade(2, "More BIG", "a fruta possui mais espaço e o preço de venda fica bem maior (comparado com More delicius), com o tempo de aparência bem maior também"),
		// new BranchUpgrade(3, "More Delicius", "as frutas dão mais valor de venda com o preço de upgrade aumenta um pouco"),
		// new BranchUpgrade(4, "More Genetic", "as frutas tem menos espaço e menos tempo de coowldown e menos preço de venda"),
		// )
	}
}