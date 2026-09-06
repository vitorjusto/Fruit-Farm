import { gameManager } from '../../App'
import Flower from '../Flowers/Entities/Flower'
import { EMissionType } from '../Missions/Enums/EMissionType';
import MissionAction from '../Missions/Entities/MissionAction';
import NewFlowerAvailable from '../Flowers/Entities/NewFlowerAvailable';
export default class FlowerManager
{
	Context;
	Canvas;
	Flowers = [];

	constructor(context, canvas)
	{
		this.Context = context
		this.Canvas = canvas
		this.Flowers = []
		this.TotalMoneyPerSecond = 0

		this.AvailableFlowers = []
		this.AvailableFlowers.push(new NewFlowerAvailable("Daisy", 20))
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

	AddFlower(newFlowerInfo)
	{
		if(gameManager.money < newFlowerInfo.Value)
			return -1;

		gameManager.AddMoney(-newFlowerInfo.Value)

		var newFlower = new Flower(this.Context, this.Flowers.length + 1)
		this.Flowers.push(newFlower)

		return newFlower.Id
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

	GetTotalMoneyPerSecond()
	{
		var total = 0
		this.Flowers.forEach((x) => total += x.GetMoneyPerSecond())

		return total
	}
	Reset()
	{
		this.Flowers = [];
	}
}
