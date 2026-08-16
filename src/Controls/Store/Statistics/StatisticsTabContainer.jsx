
export default function StatisticsTabContainer(props)
{
	return(
		<div className="StatisticsTabContainer">
			<div className="StatisticsTabButton" onClick={() => props.onClick(0)}>Global Stats</div>
			<div className="StatisticsTabButton" onClick={() => props.onClick(1)}>Fruits Stats</div>
			<div className="StatisticsTabButton" onClick={() => props.onClick(2)}>Achivments</div>
		</div>
	)
}