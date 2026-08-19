import { gameManager } from '../../App'
import { ESeason } from './PrestigeManager'
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

		this.Reset();
	}

	Update(deltaTime)
	{
		//Draw tree trunk ground
		var trunkSize = 80
		this.context.fillStyle = "brown"
    	this.context.fillRect(((this.canvas.width) / 2) - (trunkSize / 2), 150, trunkSize, 1000);

		//Draw tree cope
		var copeWidth = 800

		this.SetCurrentSeasonColor()
    	this.context.fillRect(((this.canvas.width) / 2) - (copeWidth / 2), 80, copeWidth, 300);

		//Draw ground
    	this.context.fillRect(0, (this.canvas.height) - 60, this.canvas.width, 280);
	}

	SetCurrentSeasonColor()
	{
		if(gameManager.PrestigeManager.CurrentSeason == ESeason.Summer)
			this.context.fillStyle = "rgb(0, 255, 0)"
		else if(gameManager.PrestigeManager.CurrentSeason == ESeason.Fall)
			this.context.fillStyle = "rgb(255, 123, 0)"
		else if(gameManager.PrestigeManager.CurrentSeason == ESeason.Winter)
			this.context.fillStyle = "rgb(199, 236, 255)"
		else if(gameManager.PrestigeManager.CurrentSeason == ESeason.Spring)
			this.context.fillStyle = "rgb(240, 53, 215)"
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

	GetFruitSpawnModifier()
	{
		return this.FruitSpawnModifier * gameManager.PrestigeManager.GetTreeSpawnTimerPrestigeModifier()
	}

	Reset()
	{
		
		this.Level = 1
		this.UpgradePrice = 1
		this.Size = 100

		this.BranchUpgradeId = 1
		this.BranchUpgrade = null
		this.FruitSpawnModifier = 1
	}
}