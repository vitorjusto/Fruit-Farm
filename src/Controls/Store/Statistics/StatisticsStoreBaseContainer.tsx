import FruitsStatsContainer from './FruitsStatsContainer'
import './Styles/Statistics.css'

export default function StatisticsStoreBaseContainer() 
{
	return(<div>
				<StatisticsTabContainer/>
				<FruitsStatsContainer/>
			</div>
	)
}

function StatisticsTabContainer()
{
	return(
		<div className="StatisticsTabContainer">
			<div className="StatisticsTabButton">Global Stats</div>
			<div className="StatisticsTabButton">Fruits Stats</div>
			<div className="StatisticsTabButton">Achivments</div>
		</div>
	)
}