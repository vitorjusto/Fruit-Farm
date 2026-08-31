import { gameManager } from '../../App'
import Flower from '../Flowers/Entities/Flower'
import { EMissionType } from '../Missions/Enums/EMissionType';
import MissionAction from '../Missions/Entities/MissionAction';
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
		this.Flowers = []
		this.TotalMoneyPerSecond = 0
	}

	Update(deltaTime)
	{
		this.TotalMoneyPerSecond = 0
		this.Flowers.forEach(element => {
			element.Update(deltaTime)
			this.TotalMoneyPerSecond += element.GetMoneyPerSecond()
		});

		gameManager.MissionManager.MissionAction(new MissionAction(EMissionType.MoneyPerSecond, 0, this.TotalMoneyPerSecond))
		
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

	Reset()
	{
		this.Flowers = [];
	}
}
