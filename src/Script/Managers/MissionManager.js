import { EMissionType } from "../Missions/Enums/EMissionType";
import MissionAction from "../Missions/Entities/MissionAction";
import Mission from "../Missions/Entities/Mission";
import { gameManager } from "../../App";
import { GetMission, especificMissionObjectDTO } from "../Missions/Factories/MissionFactory";

export default class MissionManager
{

	constructor()
	{
		this.MissionsAccomplished = 0
		this.dto = new especificMissionObjectDTO()

		this.Mission1 = new Mission(EMissionType.CollectFruit, 1, "Collect any fruit", 10);
		this.Mission2 = new Mission(EMissionType.MoneyCollectedByFlower, 1, "Money collected by flower", 200);
		this.Mission3 = new Mission(EMissionType.BirdsTakendown, 1, "Birds taken down", 10);

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
			button = `<div class='missionButton' id='button${missionId}'>Claim</div>`
		else
			button = `<p>${mission.ClearAmount}/${mission.ClearConditionAmount}</p>`

		return `<div class="PopupSubContainerSmall PopupSubContainerAchivment"><p>${mission.Description}</p>${button}</div>`
	}

	ClaimReward(missionId)
	{
		this.MissionsAccomplished += 1
		gameManager.StatisticsManager.GlobalStats.MissionsAccomplished = this.MissionsAccomplished

		if(missionId == 1)
			this.Mission1 = GetMission(this.MissionsAccomplished, this.dto);
		if(missionId == 2)
			this.Mission2 = GetMission(this.MissionsAccomplished, this.dto);
		if(missionId == 3)
			this.Mission3 = GetMission(this.MissionsAccomplished, this.dto);
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
