import { gameManager } from '../../App'
import { GetBranchUpgradeCollection } from '../../Script/BranchUpgrade/Functions/DogBranchUpgrade'

export default class DogManager
{
	BranchUpgrade = null
	ClickValue = 10
	ClickAmount = 10
	MaxClickAmount = 10
	Cooldown = 0
	MaxCooldown = 10

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		this.Reset()
	}

	Update(deltaTime)
	{
		if(this.Level == 0)
			return;

		this.context.fillStyle = "Blue"
		this.context.fillRect(20, (this.canvas.height) - 100, 50, 50);

		if(this.Cooldown > 0)
		{
			this.Cooldown -= deltaTime
			this.context.fillStyle = "Red"
			this.context.fillRect(20, (this.canvas.height) - 100, 50, 50);

		}

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

	PetDog()
	{
		if(this.Cooldown > 0)
			return 0;

		this.ClickAmount -= 1

		if(this.ClickAmount == 0)
		{
			this.Cooldown = this.MaxCooldown
			this.ClickAmount = this.MaxClickAmount
		}

		return this.ClickValue;
	}

	Reset()
	{
		this.Level = 0
		this.UpgradePrice = 1

		this.BranchUpgradeId = 1
		this.BranchUpgrade = null
		
		this.ClickValue = 10
		this.ClickAmount = 10
		this.MaxClickAmount = 10
		this.Cooldown = 0
		this.MaxCooldown = 10
	}
}