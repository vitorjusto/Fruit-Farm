import FruitSpawner from '../Fruits/Entites/FruitSpawner'
import { gameManager } from '../../App';

export default class FruitManager
{
	FruitsSpawners = []

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;
		this.FruitsSpawners.push(new FruitSpawner(context, canvas, 'Apple', 1, 'Simple fruit, simple price', 3000, 1, 1))
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
		this.FruitsSpawners.push(new FruitSpawner(this.context, this.canvas, 'Apple', 1, 'Simple fruit, simple price', 3000, 1, 1))
	}
}