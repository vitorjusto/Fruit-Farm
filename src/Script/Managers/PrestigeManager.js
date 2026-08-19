import { gameManager } from "../../App";

export default class PrestigeManager
{
	CurrentSeason;
	CurrentPeriod;

	Diamonts = 100;
	FruitsSellCount = 0;
	MaxFruitSellCount = 100;
	SetUpdateAction = () => {}

	
	fruitValueDiamonts = 0
	flowerValueDiamonts = 0
	beesDiamonts = 0
	treeSpawnTimerDiamonts = 0

	GetFruitValuePrestigeModifier()
	{
		return 1 + this.fruitValueDiamonts
	}

	GetflowerValuePrestigeModifier()
	{
		return 1 + this.flowerValueDiamonts
	}

	GetBeesPrestigeModifier()
	{
		return 1 + this.beesDiamonts
	}

	GetTreeSpawnTimerPrestigeModifier()
	{
		return 1 + this.treeSpawnTimerDiamonts
	}

	constructor()
	{
		this.CurrentSeason = ESeason.Summer
		this.CurrentPeriod = EPeriod.Morning
	}

	AddFruitSellCount(amount)
	{
		this.FruitsSellCount+= amount;

		while(this.FruitsSellCount >= this.MaxFruitSellCount)
		{
			this.FruitsSellCount -= this.MaxFruitSellCount;
			this.Diamonts++;
		}

		console.log("FruitsSellCount: " + this.FruitsSellCount + " Diamonts: " + this.Diamonts)
		this.SetUpdateAction()
	}

	ResetGame(FruitValue, FlowerValue, Bees, TreeSpawnTimer)
	{
		this.CurrentSeason += 1
		
		if(this.CurrentSeason > 3)
			this.CurrentSeason = 0;
		
		this.CurrentPeriod += 1;

		if(this.CurrentPeriod > 2)
			this.CurrentPeriod = 0;

		this.fruitValueDiamonts = FruitValue
		this.flowerValueDiamonts = FlowerValue
		this.beesDiamonts = Bees
		this.treeSpawnTimerDiamonts = TreeSpawnTimer

		console.log(this.fruitValueDiamonts)

		gameManager.fruitManager.Reset()
		gameManager.flowerManager.Reset()
		gameManager.DogManager.Reset()
		gameManager.BeeManager.Reset()
		gameManager.treeManager.Reset()

		gameManager.Reset()
	}
}

export const ESeason =
{
	Summer: 0,
	Fall: 1,
	Winter: 2,
	Spring: 3
}

export const EPeriod =
{
	Morning: 0,
	Afternoon: 1,
	Night: 2
}