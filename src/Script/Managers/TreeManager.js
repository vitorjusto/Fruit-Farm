import { gameManager } from '../../App'
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/TreeBranchUpgrade'

export default class TreeManager
{
	BranchUpgrade = null
	Size = 100
	FruitSpawnModifier = 1

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		this.Level = 1
		this.UpgradePrice = 1
		this.Size = 100

		this.BranchUpgradeId = 1
	}

	Update(deltaTime)
	{
		//Draw tree trunk ground
		var trunkSize = 80
		this.context.fillStyle = "brown"
    	this.context.fillRect(((this.canvas.width) / 2) - (trunkSize / 2), 150, trunkSize, 1000);

		//Draw tree cope
		var copeWidth = 800
		this.context.fillStyle = "rgb(0, 255, 0)"
    	this.context.fillRect(((this.canvas.width) / 2) - (copeWidth / 2), 80, copeWidth, 300);

		//Draw ground
    	this.context.fillRect(0, (this.canvas.height) - 60, this.canvas.width, 280);
	}

	Upgrade()
	{
		if(gameManager.money < this.UpgradePrice)
			return;

		gameManager.setMoney(gameManager.money - this.UpgradePrice)

		this.UpgradePrice += 1
		this.Size += 1
		this.Level += 1

		this.FruitSpawnModifier += 0.01

		if(this.Level == 25)
			this.BranchUpgrade = GetBranchUpgradeCollection(this.BranchUpgradeId)
	}
}