import FruitsStatsContainer from './FruitsStatsContainer'
import AchivmentsContainer from './AchivmentsContainer'
import GlobalStats from './GlobalStatsContainer'
import StatisticsTabContainer from './StatisticsTabContainer'
import './Styles/Statistics.css'
import {useState }  from 'react'

export default function StatisticsStoreBaseContainer() 
{
	var [selectedTab, setSelectedTab] = useState(<GlobalStats/>)

	function onClick(tabIndex)
	{
		if(tabIndex == 0)
			setSelectedTab(<GlobalStats/>)
		else if(tabIndex == 1)
			setSelectedTab(<FruitsStatsContainer/>)
		else if(tabIndex == 2)
				setSelectedTab(<AchivmentsContainer/>)
	}
	return(<div>
				<StatisticsTabContainer onClick={onClick}/>
				{selectedTab}
			</div>
	)
}