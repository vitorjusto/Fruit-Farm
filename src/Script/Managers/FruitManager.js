import FruitSpawner from '../Fruits/Entites/FruitSpawner'
import { gameManager } from '../../App';
import { GetAllSeasonalFruit } from '../Fruits/Factories/FruitFactory';
import { EFruit, EPeriod, ESeason } from '../Fruits/Enums/FruitsEnums';

export default class FruitManager
{
	FruitsSpawners = []
	AvailableSeasonalFruits = [
  		EFruit.ONION,
  		EFruit.TOMATO,
  		EFruit.CORN,
  		EFruit.GARLIC,
  		EFruit.CHILLI_PEPER,
  		EFruit.CARROT,
  		EFruit.EGGPLANT,
  		EFruit.SWEET_POTATO,
  		EFruit.AVOCADO,
  		EFruit.JACK_O_LANTERN,
  		EFruit.PAPAYA,
  		EFruit.KIWI,
  		EFruit.ICE_FRUIT,
  		EFruit.PERSIMMON,
  		EFruit.CLOUD_BERRY,
  		EFruit.TURNIP,
  		EFruit.POTATO,
  		EFruit.CUCUMBER,
  		EFruit.CABBAGE,
  		EFruit.GRAPE_JUICE,
  		EFruit.DRAGON_FRUIT,
  		EFruit.POPCORN,
  		EFruit.SUN_FRUIT,
  		EFruit.MARIAN_MANGO,
  		EFruit.BLACKBERRY,
  		EFruit.STRAWBERRY_ICESCREAM,
  		EFruit.GUARANA,
  		EFruit.COCOA,
  		EFruit.MOON_FRUIT
	]

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;
		this.FruitsSpawners.push(new FruitSpawner(context, canvas, 'Apple', 1, 'Simple fruit, simple price', 1, 2, 2, 1, EPeriod.None, ESeason.None))
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