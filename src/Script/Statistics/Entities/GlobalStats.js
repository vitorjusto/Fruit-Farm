export default class GlobalStats
{
	//Fruits
	TotalFruitsSold = 0;
	TotalMoneyGetByFruits = 0;
	TotalFruitsUpgrades = 0;
	TotalFruitsBranchUpgrades = 0;

	FruitSold(value, fruitCount)
	{
		this.TotalFruitsSold += fruitCount;
		this.TotalMoneyGetByFruits += value;
	}

	//---------------------------
	//Flowers
	TotalMoneyGetByFlowers = 0;
	MaxMoneyPerSeconds = 0;
	FlowersPurshased = 0;
	FlowersSold = 0;
	TotalFlowersUpgrades = 0;
	TotalFlowersBranchUpgrades = 0;

	VerifyMaxMoneyPerSeconds(currentValue)
	{
		if(currentValue > this.MaxMoneyPerSeconds)
			this.MaxMoneyPerSeconds = currentValue;
	}

	//---------------------------
	//Tree
	TotalTreeUpgrades = 0;
	TotalTreeBranchUpgrades = 0;

	//---------------------------
	//Bees
	FruitsCollectedByBees = 0;
	MoneyCollectedByBees = 0;
	TotalBeesUpgrades = 0;
	TotalBeesBranchUpgrades = 0;

	//---------------------------
	//Dog
	AmountofTimeDogWasPet = 0;
	MoneyGetByDog = 0;
	TotalDogUpgrades = 0;
	TotalDogBranchUpgrades = 0;

	//---------------------------
	//Birds
	TotalBirdsTakenDown = 0;
	TotalBirdsUpgrades = 0;
	TotalBirdsBranchUpgrades = 0;

	//---------------------------
	//Others
	PrestigeMade = 0;
	MissionsAccomplished = 0;

}