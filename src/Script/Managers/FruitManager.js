import FruitSpawner from '../Fruits/Entites/FruitSpawner'
import { gameManager } from '../../App';

export default class FruitManager
{
	FruitsSpawners = []

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;
		this.FruitsSpawners.push(new FruitSpawner(context, canvas, 'Apple', 1, 'Simple fruit, simple price', 1, 2, 2, 1))

	}

	Update(deltaTime)
	{
		this.FruitsSpawners.forEach(element => {
			element.Update(deltaTime)
		});
	}

	HarvestFruits()
	{
		var total = 0

		this.FruitsSpawners.forEach(element => {
			total += element.HarvestFruits()
		});

		return total;
	}

	Reset()
	{
		this.FruitsSpawners = []
		this.FruitsSpawners.push(new FruitSpawner(this.context, this.canvas, 'Apple', 1, 'Simple fruit, simple price', 1, 2, 2, 1))

		var s = new FruitSpawner(this.context, this.canvas, 'Carrot', 1, 'id', 1, 2, 2, 31)
		s.Season = 1;

		this.FruitsSpawners.push(s)

		s = new FruitSpawner(this.context, this.canvas, 'Cocoa', 1, 'id', 1, 2, 2, 53)
		s.Period = 2;

		this.FruitsSpawners.push(s)

		s = new FruitSpawner(this.context, this.canvas, 'Jack o Lantern', 1, 'id', 1, 2, 2, 35)
		s.Period = 2;
		s.Season = 1;

		this.FruitsSpawners.push(s)
	}
}