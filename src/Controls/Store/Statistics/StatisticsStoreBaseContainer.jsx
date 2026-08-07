import FruitsStatsContainer from './FruitsStatsContainer'
import AchivmentsContainer from './AchivmentsContainer'
import StatisticsTabContainer from './StatisticsTabContainer'
import './Styles/Statistics.css'

export default function StatisticsStoreBaseContainer() 
{
	return(<div>
				<StatisticsTabContainer/>
				<AchivmentsContainer/>
			</div>
	)
}