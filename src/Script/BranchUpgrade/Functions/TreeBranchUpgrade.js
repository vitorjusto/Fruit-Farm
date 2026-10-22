import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeTreeBranchUpgrade(treeManager, id)
{
	treeManager.BranchUpgradeId = id
	treeManager.BranchUpgrade = null;

	if(id == 2)//More Tall
	{
		treeManager.Size += 200
		treeManager.NerfSeasonalFruits = true
	}else if(id == 3)//More Stronger
	{
		treeManager.SellingPriceModifier *= 1.5
		treeManager.UpgradePriceModifier *= 1.5
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
								new BranchUpgrade(2, "More Tall", "The space for fruits is increased; however, Seasonal fruits will spawn less."),
								new BranchUpgrade(3, "More Stronger", "The price of fruit-based upgrades increases, and the selling price of all fruits also increases."),
								new BranchUpgrade(4, "More Colorful", "Increases the available spaces for flowers, and slightly increases the time it takes for fruits to appear."),
							)
}