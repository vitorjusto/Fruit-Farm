

export default function FlowerStoreLateralContent(props) {

  return (
	<div className={'StoreLateralContents'}>
		<div className={'StoreContentName'}>a</div>
		<div className={'StoreContentLevel'}>Level: </div>
		<div className={'StoreContentDescritpion'}>desc</div>
		<BranchUpgrade/>
		<UpgradeTable/>
		<div>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>a</div>
		</div>
		
		<div>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>a</div>
		</div>
	</div>
  )
}

function BranchUpgrade(props) {
	return <div>
		<div className={'StoreContentBranchUpgrade'} style={{ height: '100%', display: props.AvaliableBranchUpgrade?'inline':'none'}}>
			<div className={'StoreContentUpgradeDescription'}>Description</div>
			<div className={'StoreContentUpgradeButtonContainer'}>
				<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
				<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
				<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
			</div>
		</div>

	</div>
}

function UpgradeTable(props) 
{
	return <div className={'StoreContentStatus'}>
		<table className={'StoreContentStatusTable'}>
			<tr>
				<th></th>
				<th className={'StoreContentStatusTableContent'}>Current Level</th>
				<th className={'StoreContentStatusTableContent'}>Next Level</th>
			</tr>
			<tr>
				<th className={'StoreContentStatusTableContent'}><b>Selling Price</b></th>
				<td className={'StoreContentStatusTableContent'}>s</td>
				<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
			</tr>
			<tr>
				<th className={'StoreContentStatusTableContent'}><b>Spawn Time</b></th>
				<td className={'StoreContentStatusTableContent'}>d</td>
				<td className={'StoreContentStatusTableContent'}>0 min (+0.02)</td>
			</tr>
		</table>
	</div>
}
