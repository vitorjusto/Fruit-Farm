import { EMissionType } from "../Missions/Enums/EMissionType";
import MissionAction from "../Missions/Entities/MissionAction";
import Mission from "../Missions/Entities/Mission";

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
