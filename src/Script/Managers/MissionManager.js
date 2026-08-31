
export default class MissionManager
{

	constructor()
	{
		this.Mission1 = new Mission(1, 1, "Description 1", 100);
		this.Mission2 = new Mission(EMissionType.MoneyCollectedByFlower, 1, "Description 2", 200);
		this.Mission3 = new Mission(EMissionType.BirdsTakendown, 1, "Description 3", 300);
	}

	GetMissionHtml()
	{
		var html = this.GetMissionText(this.Mission1, 1)
		html += this.GetMissionText(this.Mission2, 2)
		html += this.GetMissionText(this.Mission3, 3)

		return html
	}

	GetMissionText(mission, missionId)
	{
		var button = ""

		if(mission.MissionCleared)
			button = `<button id='button${missionId}'>Claim</button>`
		else
			button = `<p>${mission.ClearAmount}/${mission.ClearConditionAmount}</p>`

		return `<div class="PopupSubContainerSmall PopupSubContainerAchivment"><p>${mission.Description}</p>${button}</div>`
	}

	ClaimReward(missionId)
	{
		this.Mission1 = new Mission(1, 1, "Description 1", 130);
	}

	MissionAction(missionAction)
	{
		if(missionAction.Type == this.Mission1.Type)
			this.Mission1.Update(missionAction)
		if(missionAction.Type == this.Mission2.Type)
			this.Mission2.Update(missionAction)
		if(missionAction.Type == this.Mission3.Type)
			this.Mission3.Update(missionAction)
	}
}

export class Mission
{
	constructor(type, especificTypeId, description, clearAmount)
	{
		this.Type = type
		this.EspecificTypeId = especificTypeId
		this.Description = description
		this.ClearAmount = 0

		this.ClearConditionAmount = clearAmount
		this.MissionCleared = false
	}

	Update(missionAction)
	{
		if(this.Type == EMissionType.CollectEspecificFruit || 
			this.Type == EMissionType.UpgradeFruit ||
			this.Type == EMissionType.MoneyCollectedByEspecificFlower)
		{
			if(this.EspecificTypeId == missionAction.EspecificTypeId)
				this.ClearAmount += missionAction.ClearAmount
		}else if(this.Type == EMissionType.MoneyPerSecond)
		{
			this.ClearAmount = missionAction.ClearAmount
		}else
		{
			this.ClearAmount += missionAction.ClearAmount
		}

		if(!this.MissionCleared)
			this.MissionCleared = this.ClearAmount >= this.ClearConditionAmount
	}
}

export var EMissionType =
{
	CollectFruit: 1,
	CollectEspecificFruit: 2,
	UpgradeFruit: 3,
	UpgradeAllFruit: 4,
	MoneyCollectedByFlower: 5,
	MoneyCollectedByEspecificFlower: 6,
	MoneyPerSecond: 7,
	FruitCollectedByBees: 8,
	PetDog: 9,
	BirdsTakendown: 10,
}

export class MissionAction
{
	constructor(type, especificTypeId, clearAmount)
	{
		this.Type = type;
		this.EspecificTypeId = especificTypeId;
		this.ClearAmount = clearAmount;
	}
}