
export default class FlowerManager
{
	Context;
	Canvas;
	Flowers = [];

	constructor(context, canvas, AddMoney)
	{
		this.Context = context
		this.Canvas = canvas

		// this.Flowers = [new Flower(AddMoney)]
	}

	
	Update(deltaTime)
	{
		this.Flowers.forEach(element => {
			element.Update(deltaTime)
		});
	}
}

class Flower
{
	MoneyPerSecond=0.5;
	AddMoney;

	constructor(AddMoney)
	{
		this.AddMoney = AddMoney
	}
	
	Update(deltaTime)
	{
		this.AddMoney(this.MoneyPerSecond * deltaTime)
	}
}