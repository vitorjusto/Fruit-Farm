export default class FruitStats
{
	FruitsCollected = []

	AddFruitCollected(fruitName, branchUpgradeId, moneyAmount, fruitAmount)
	{
		var fruit = this.FindFruit(fruitName, branchUpgradeId)

		if(!fruit)
		{
			fruit = GetNewFruit(fruitName, branchUpgradeId)
			this.FruitsCollected.push(fruit)
		}

		fruit.AddFruitCollected(moneyAmount, fruitAmount)
	}

	FindFruit(fruitName, branchUpgradeId)
	{
		return this.FruitsCollected.find((x) => x.FruitName == fruitName && x.BranchUpgradeId == branchUpgradeId)
	}
}

function GetNewFruit(fruitName, branchUpgradeId)
{
	return new SingularFruitStat(fruitName, GetBranchUpgradePath(branchUpgradeId), branchUpgradeId)
}

export function GetBranchUpgradePath(branchUpgradeId)
{
	
	switch (branchUpgradeId) 
	{
		case 1:
			return "Start"
		case 2:
			return 'More BIG'
		case 3:
			return 'More Delicius'
		case 4:
			return 'More Genetic'

		case 5:
			return 'More BIG > More Fit'
		case 6:
			return 'More BIG > More BIGGER'
		case 7:
			return 'More BIG > More fat'
		case 8:
			return 'More Delicius > More Premium'
		case 9:
			return "More Delicius > More Gurmet"
		case 10:
			return "More Delicius > More Popular"
		case 11:
			return "More Genetic > More Compact"
		case 12:
			return "More Genetic > More Adaptive"
		case 13:
			return "More Genetic > More Improviment"

		case 14:
			return "More BIG > More Fit > More Coach"
		case 15:
			return "More BIG > More Fit > More Heathy"
		case 16:
			return "More BIG > More Fit > More negotiator"

		case 17:
			return "More BIG > More BIGGER > More Envy"
		case 18:
			return "More BIG > More BIGGER > More BIGGEST"
		case 19:
			return "More BIG > More BIGGER > More Heavy"

		case 20:
			return "More BIG > More fat > TODO"
		case 21:
			return "More BIG > More fat > TODO2"
		case 22:
			return "More BIG > More fat > More Luck"


		case 23:
			return "More Delicius > More Premium > More Atractive"
		case 24:
			return "More Delicius > More Premium > More Rarer"
		case 25:
			return "More Delicius > More Premium > More Simplier"

		case 26:
			return "More Delicius > More Gurmet > TODO"
		case 27:
			return "More Delicius > More Gurmet > More Greedy"
		case 28:
			return "More Delicius > More Gurmet > More Special"
		case 29:
			return "More Delicius > More Popular > More Trendy"
		case 30:
			return "More Delicius > More Popular > More Nostalgic"
		case 31:
			return "More Delicius > More Popular > More Cool"
		case 32:
			return "More Genetic > More Compact > More Heavy"
		case 33:
			return "More Genetic > More Compact > More Efficient"
		case 34:
			return "More Genetic > More Compact > More Important"
		case 35:
			return "More Genetic > More Adaptive > More Automatic"
		case 36:
			return "More Genetic > More Adaptive > More Friendly"
		case 37:
			return "More Genetic > More Adaptive > More Smart"
		case 38:
			return "More Genetic > More Improviment > More Economic"
		case 39:
			return "More Genetic > More Improviment > More Pretty"
		case 40:
			return "More Genetic > More Improviment > More Misterius"
	}
}

export class SingularFruitStat
{
	constructor(fruitName, branchUpgradePath, branchUpgradeId)
	{
		this.FruitName = fruitName;
		this.BranchUpgradePath = branchUpgradePath;
		this.BranchUpgradeId = branchUpgradeId;
		this.MoneyMade = 0;
		this.FruitCollected = 0;
	}

	AddFruitCollected(MoneyAmount, FruitAmount)
	{
		this.MoneyMade += MoneyAmount;
		this.FruitCollected += FruitAmount;
	}
}