import BranchUpgradeCollection from '../Entities/BranchUpgradeCollection'
import BranchUpgrade from '../Entities/BranchUpgrade'

export function ChangeBeeBranchUpgrade(beesManager, id)
{
	beesManager.BranchUpgradeId = id
	beesManager.BranchUpgrade = null;

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
								new BranchUpgrade(2, "More Bees", "Triples the number of bees but doubles the price Upgrade."),
								new BranchUpgrade(3, "More Eficient", "Bees collect fewer fruits, but the time spent obtaining flowers while out increases."),
								new BranchUpgrade(4, "More Workaholic", "the bees' cooldown is reduced, but the time spent harvesting flowers while you are away is also slightly reduced."),
							)
	if(id == 2)
		return new BranchUpgradeCollection(
								new BranchUpgrade(5, "More TeamWork", "The time available to collect flowers while away is increased, with a 1.5x bonus."),
								new BranchUpgrade(6, "More Beeses", "Triples the number of bees but doubles the upgrade price"),
								new BranchUpgrade(7, "More Layoff", "Slightly reduces the number of bees, but the upgrade price is halved by 4."),
							)
	if(id == 3)
		return new BranchUpgradeCollection(
								new BranchUpgrade(8, "More Friendly", "Automatically pets the dog, but the cooldown for obtaining fruits is reduced."),
								new BranchUpgrade(9, "More Aggressive", "Knocks down birds, but the cooldown for obtaining fruits is reduced."),
								new BranchUpgrade(10, "More Happier", "Bees collect more fruit"),
							)
	if(id == 4)
		return new BranchUpgradeCollection(
								new BranchUpgrade(11, "More Locked In", "The selling price of other flowers increases. The cooldown decreases drastically, but flowers are not collected while you are away."),
								new BranchUpgrade(12, "More Patriot", "Fruits collected by bees have a higher selling price."),
								new BranchUpgrade(13, "More Responsible", "The time it takes to collect flowers while you are away increases slightly, and the money collected by flowers while away receives a 1.5x bonus."),
							)
			
}