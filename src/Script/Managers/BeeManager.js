import { gameManager } from '../../App'
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/DogBranchUpgrade'

export default class BeeManager
{
	BranchUpgrade = null
	ClickValue = 10
	Cooldown = 0
	MaxCooldown = 2

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		this.Level = 1
		this.UpgradePrice = 1

		this.BranchUpgradeId = 1
	}

	Update(deltaTime)
	{
		this.context.fillStyle = "Yellow"
		this.context.fillRect(20, 40, 50, 50);

		this.Cooldown -= deltaTime

		if(this.Cooldown <= 0)
			this.CollectFruit()
	}

	CollectFruit()
	{
		this.Cooldown += this.MaxCooldown

		gameManager.fruitManager.FruitsSpawners.toSorted(function(x, y) {return x.FruitsSpawned.length - y.FruitsSpawned.length }).toReversed()[0].CollectFruit()
	}

	Upgrade()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.ClickValue += 1
		this.MaxClickAmount += 1
		this.Level += 1

		if(this.Level == 25)
			this.BranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}
}