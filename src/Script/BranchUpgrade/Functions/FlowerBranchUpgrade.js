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
								new BranchUpgrade(2, "More Color", "Gives more money."),
								new BranchUpgrade(3, "More beatiful", "Occasionally, some butterflies may appear and increase the amount of money he can give."),
								new BranchUpgrade(4, "More Safe", "the selling price of the flower increases."),
							)
	
	// * Gen 2
	
	if(id == 2)
		return new BranchUpgradeCollection(
								new BranchUpgrade(5, "More Good-looking", "Slightly increases the money received and slightly deceases the upgrade price"),
								new BranchUpgrade(6, "More Colorful", "Gives even more money."),
								new BranchUpgrade(7, "More Shiny", "The upgrade price decreases."),
							)
	if(id == 3)
		return new BranchUpgradeCollection(
								new BranchUpgrade(8, "More Help", "The butterflies have an efficiency of x3, and the flowers next to them have an efficiency of x1.5."),
								new BranchUpgrade(9, "More Storage", "Allows more than one butterfly on the flower."),
								new BranchUpgrade(10, "More Influencer", "flowers placed next to this flower receive a 1.5x money buff."),
							)
	if(id == 4)
		return new BranchUpgradeCollection(
								new BranchUpgrade(11, "More Color", "The selling price of the other flowers increases."),
								new BranchUpgrade(12, "More Artificial", "The purchase price of the other flowers decreases."),
								new BranchUpgrade(13, "More Safer", "The selling price of the flower is doubled."),
							)

}