import { gameManager } from '../../App'
import Flower from '../Flowers/Entities/Flower'

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
