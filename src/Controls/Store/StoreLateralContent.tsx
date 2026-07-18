import './Styles/StoreLateralContent.css'

export default function StoreFruitLateralContent(props) {

  return (
	<div className={'StoreLateralContents'}>
		<div className={'StoreContentName'}>{props.Text}</div>
		<div className={'StoreContentLevel'}>Level: {props.Level}</div>
		<div className={'StoreContentDescritpion'}>{props.Description}</div>
		<BranchUpgrade AvaliableBranchUpgrade={props.AvaliableBranchUpgrade}/>
		<UpgradeTable SellingPrice={props.SellingPrice} SpawnTimer={props.SpawnTimer}/>
		<div>
			<div onClick={props.onUpgradeClick} className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>{props.UpgradePrice}</div>
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
				<td className={'StoreContentStatusTableContent'}>{props.SellingPrice}</td>
				<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
			</tr>
			<tr>
				<th className={'StoreContentStatusTableContent'}><b>Spawn Time</b></th>
				<td className={'StoreContentStatusTableContent'}>{props.SpawnTimer}</td>
				<td className={'StoreContentStatusTableContent'}>0 min (+0.02)</td>
			</tr>
		</table>
	</div>
}
