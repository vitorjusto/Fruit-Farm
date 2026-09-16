import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeFruitBranchUpgrade(fruitSpawner, id)
{
	fruitSpawner.BranchUpgradeId = id
	fruitSpawner.AvailableBranchUpgrade = null;

	if(id == 2)//More BIG
	{
		fruitSpawner.CooldownBase *= 3
		fruitSpawner.Size *= 2
		fruitSpawner.SellingPriceBase *= 3
	}else if(id == 3)//More Delicius
	{
		fruitSpawner.SellingPriceBase *= 1.5
		fruitSpawner.UpgradePriceBase *= 1.5
	}else if(id == 4)//More Genetic
	{
		fruitSpawner.CooldownBase /= 1.5
		fruitSpawner.Size /= 2
		fruitSpawner.SellingPriceBase /= 1.5
	}

	fruitSpawner.UpdateFruitsStats()
}

export function GetBranchUpgradeCollection(id)
{
	if(id == 1)
		return new BranchUpgradeCollection(
								new BranchUpgrade(2, "More BIG", "Double the size, triple the price, triple the spawn time!"),
								new BranchUpgrade(3, "More Delicius", "Increase the selling value and slightly increase the upgrade price."),
								new BranchUpgrade(4, "More Genetic", "Less space, less cowldown time and a lower selling price."),
							)
}