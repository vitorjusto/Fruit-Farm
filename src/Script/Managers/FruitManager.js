import FruitSpawner from '../Entites/Fruits/FruitSpawner'


export default class FruitManager
{
	FruitsSpawners = []

	constructor(context, canvas)
	{
		this.FruitsSpawners.push(new FruitSpawner(context, canvas))
	}

	Update(deltaTime)
	{
		this.FruitsSpawners.forEach(element => {
			element.Update(deltaTime)
		});
	}
}