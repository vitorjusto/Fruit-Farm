import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeFlowerBranchUpgrade(flower, id)
{
	flower.BranchUpgradeId = id
	flower.AvailableBranchUpgrade = null;

	// if(id == 2)//More BIG
	// {
	// 	fruitSpawner.MaxSpawnCooldown *= 3
	// 	fruitSpawner.MaxSize /= 2
	// 	fruitSpawner.SellingPrice *= 3
	// }else if(id == 3)//More Delicius
	// {
	// 	fruitSpawner.SellingPrice *= 1.5
	// 	fruitSpawner.UpgradePrice *= 1.5
	// }else if(id == 4)//More Genetic
	// {
	// 	fruitSpawner.MaxSpawnCooldown /= 1.5
	// 	fruitSpawner.MaxSize *= 2
	// 	fruitSpawner.SellingPrice /= 1.5
	// }
}


export function GetBranchUpgradeCollection(id)
{
	if(id == 1)
		return new BranchUpgradeCollection(
								new BranchUpgrade(2, "More Color", "Gives more money"),
								new BranchUpgrade(3, "More beatiful", "eventualmente algumas borboletas podem aparecer e aumentar a quatidade de dinheiro que ele pode dar"),
								new BranchUpgrade(4, "More Safe", "o preço de venda da flor aumenta"),
							)
}