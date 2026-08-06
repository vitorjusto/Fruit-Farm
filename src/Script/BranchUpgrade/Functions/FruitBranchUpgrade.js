import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeFruitBranchUpgrade(fruitSpawner, id)
{
	fruitSpawner.BranchUpgradeId = id
	fruitSpawner.AvailableBranchUpgrade = null;

	if(id == 2)//More BIG
	{
		fruitSpawner.MaxSpawnCooldown *= 3
		fruitSpawner.MaxSize /= 2
		fruitSpawner.SellingPrice *= 3
	}else if(id == 3)//More Delicius
	{
		fruitSpawner.SellingPrice *= 1.5
		fruitSpawner.UpgradePrice *= 1.5
	}else if(id == 4)//More Genetic
	{
		fruitSpawner.MaxSpawnCooldown /= 1.5
		fruitSpawner.MaxSize *= 2
		fruitSpawner.SellingPrice /= 1.5
	}
}

export function GetBranchUpgradeCollection(id)
{
	if(id == 1)
		return new BranchUpgradeCollection(
								new BranchUpgrade(2, "More BIG", "a fruta possui mais espaço e o preço de venda fica bem maior (comparado com More delicius), com o tempo de aparência bem maior também"),
								new BranchUpgrade(3, "More Delicius", "as frutas dão mais valor de venda com o preço de upgrade aumenta um pouco"),
								new BranchUpgrade(4, "More Genetic", "as frutas tem menos espaço e menos tempo de coowldown e menos preço de venda"),
							)
}