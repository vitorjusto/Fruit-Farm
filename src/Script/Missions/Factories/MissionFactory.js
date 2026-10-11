import { EMissionType } from "../Enums/EMissionType";
import Mission from "../Entities/Mission";
import { GetFruitNameById } from "../../Fruits/Factories/FruitFactory";

function GetAvailableMissions(missionsAccomplished)
{
	var availableMissions = [EMissionType.CollectFruit, EMissionType.UpgradeAllFruit]

	if(missionsAccomplished > 5)
	{
		availableMissions.push(EMissionType.PetDog)
		availableMissions.push(EMissionType.MoneyPerSecond)
	}
	
	if(missionsAccomplished > 10)
		{
			availableMissions.push(EMissionType.FruitCollectedByBees)
			availableMissions.push(EMissionType.MoneyCollectedByFlower)
	}

	if(missionsAccomplished > 15)
	{
		availableMissions.push(EMissionType.CollectEspecificFruit)
		availableMissions.push(EMissionType.UpgradeFruit)
	}

	if(missionsAccomplished > 20)
	{
		availableMissions.push(EMissionType.MoneyCollectedByEspecificFlower)
		availableMissions.push(EMissionType.BirdsTakendown)
	}

	return availableMissions;
}

export function GetMission(missionsAccomplished, especificMissionObjectDTO)
{
	var availableMissions = GetAvailableMissions(missionsAccomplished)

	var mission = availableMissions[Math.round(Math.random() * (availableMissions.length))]
	
	if(mission == EMissionType.CollectFruit)
		return new Mission(EMissionType.CollectFruit, 0, "Collect Any Fruit", Math.floor(100 * (1.05 ** (missionsAccomplished))));
	if(mission == EMissionType.UpgradeAllFruit)
		return new Mission(EMissionType.UpgradeAllFruit, 0, "Upgrade Any Fruit", Math.floor(1 * (1.05 ** (missionsAccomplished))));

	if(mission == EMissionType.MoneyPerSecond)
		return new Mission(EMissionType.MoneyPerSecond, 0, "Money per second", Math.floor(5000 * (1.05 ** (missionsAccomplished))));
	if(mission == EMissionType.PetDog)
		return new Mission(EMissionType.PetDog, 0, "Pet Dog", Math.floor(10 * (1.05 ** (missionsAccomplished))));

	if(mission == EMissionType.FruitCollectedByBees)
		return new Mission(EMissionType.FruitCollectedByBees, 0, "Collect fruits by bees", Math.floor(50 * (1.05 ** (missionsAccomplished))));
	if(mission == EMissionType.MoneyCollectedByFlower)
		return new Mission(EMissionType.MoneyCollectedByFlower, 0, "Collect money from flower", Math.floor(5000 * (1.05 ** (missionsAccomplished))));

	if(mission == EMissionType.CollectEspecificFruit)
	{
		var model = new Mission(EMissionType.CollectEspecificFruit, especificMissionObjectDTO.CurrentCollectFruitId, "Collect Fruit: " + GetFruitNameById(especificMissionObjectDTO.CurrentCollectFruitId), Math.floor(10 * (1.05 ** (missionsAccomplished)) * ((0.05 * especificMissionObjectDTO.CurrentCollectFruitRotation) + 1)));
		especificMissionObjectDTO.CurrentCollectFruitId += 1;

		if(especificMissionObjectDTO.CurrentCollectFruitId == 26)
		{
			especificMissionObjectDTO.CurrentCollectFruitId = 1;
			especificMissionObjectDTO.CurrentCollectFruitRotation += 1;
		}
		return model
	}
	if(mission == EMissionType.UpgradeFruit)
		return new Mission(EMissionType.UpgradeFruit, especificMissionObjectDTO.CurrentUpgradeFruitId, "Upgrade Fruit: " + GetFruitNameById(especificMissionObjectDTO.CurrentUpgradeFruitId), Math.floor(5000 * (1.05 ** (missionsAccomplished))));

	if(mission == EMissionType.MoneyCollectedByEspecificFlower)
	{
		//TODO: create flower id behavior
		return new Mission(EMissionType.MoneyCollectedByEspecificFlower, 1, "Collect Flower: ", 12);
	}
	if(mission == EMissionType.BirdsTakendown)
	{
		var model = new Mission(EMissionType.BirdsTakendown, 0, "Takedown birds", especificMissionObjectDTO.BirdsTakeDown);
		especificMissionObjectDTO.BirdsTakeDown += 5;
		return model
	}

}

export class especificMissionObjectDTO
{
	constructor()
	{
		this.CurrentCollectFruitId = 1;
		this.CurrentCollectFruitRotation = 1;
		this.CurrentUpgradeFruitId = 1;
		this.BirdsTakeDown = 10;
	}
}