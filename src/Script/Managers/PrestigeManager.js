import { gameManager } from "../../App";

export default class PrestigeManager
{
	CurrentSeason;
	CurrentPeriod;

	Diamonts = 0;
	FruitsSellCount = 0;
	MaxFruitSellCount = 100;
	
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
	}

	ResetGame()
	{
		this.CurrentSeason += 1
		
		if(this.CurrentSeason > 3)
			this.CurrentSeason = 0;
		
		this.CurrentPeriod += 1;

		if(this.CurrentPeriod > 2)
			this.CurrentPeriod = 0;

		gameManager.fruitManager.Reset()
		gameManager.flowerManager.Reset()
		gameManager.DogManager.Reset()
		gameManager.BeeManager.Reset()
		gameManager.treeManager.Reset()
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