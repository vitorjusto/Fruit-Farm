
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
		this.Flowers.push(new Flower(this.AddMoney, this.Context, 2))
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

    	this.image = new Image();
   		this.image.src = "/assets/Flowers/Daisy/Daisy1-9.png";
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};
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
}