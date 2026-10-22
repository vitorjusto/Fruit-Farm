import FruitSpawner from '../Fruits/Entites/FruitSpawner'
import { gameManager } from '../../App';
import { GetAllSeasonalFruit } from '../Fruits/Factories/FruitFactory';
import { EFruit, EPeriod, ESeason } from '../Fruits/Enums/FruitsEnums';

export default class FruitManager
{
	FruitsSpawners = []
	AvailableSeasonalFruits = [	]

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;
		this.FruitsSpawners.push(new FruitSpawner(context, canvas, 'Apple', 1, 'Simple fruit, simple price', 1000000, 2, 2, 1, EPeriod.None, ESeason.None))
		this.FruitsSpawners.push(...GetAllSeasonalFruit(this.AvailableSeasonalFruits, context, canvas))
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
		this.FruitsSpawners.push(new FruitSpawner(this.context, this.canvas, 'Apple', 1, 'Simple fruit, simple price', 1, 2, 2, 1, EPeriod.None, ESeason.None))

		this.FruitsSpawners.push(...GetAllSeasonalFruit(this.AvailableSeasonalFruits, this.context, this.canvas))
	}
}