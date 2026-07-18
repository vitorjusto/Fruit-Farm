import FruitSpawner from '../Entites/Fruits/FruitSpawner'


export default class FruitManager
{
	FruitsSpawners = []

	constructor(context, canvas)
	{
		this.FruitsSpawners.push(new FruitSpawner(context, canvas, 'Apple', 1, 'Simple fruit, simple price', 3, 1))
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
}