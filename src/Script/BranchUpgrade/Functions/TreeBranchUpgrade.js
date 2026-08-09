import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeTreeBranchUpgrade(treeManager, id)
{
	treeManager.BranchUpgradeId = id
	treeManager.BranchUpgrade = null;

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
								new BranchUpgrade(2, "More Tall", "Aumenta o espaço das frutas, porem os nerfs de fruta por aparição de climas são aumentados"),
								new BranchUpgrade(3, "More Stronger", "Aumenta o preço de upgrades por frutas e o preço de venda de todas as frutas aumenta"),
								new BranchUpgrade(4, "More Colorful", "Aumenta os espaços disponiveis das flores, aumenta levemente o tempo de aparição por frutas"),
							)
}