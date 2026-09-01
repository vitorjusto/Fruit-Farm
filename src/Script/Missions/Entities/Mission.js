import { EMissionType } from '../Enums/EMissionType'

export default class Mission
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