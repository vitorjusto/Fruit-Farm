

export default function FlowerStoreLateralContent(props) {

  return (
	<div className={'FlowerStoreLateralContents'} style={{display:(props.visible?'grid':'none')}}>
		<div className={'StoreContentName'}>{props.FlowerName}</div>
		<div className={'StoreContentLevel'}>Level: {props.Level}</div>
		<div className={'StoreContentDescritpion'}>{props.Description}</div>
		<BranchUpgrade/>
		<UpgradeTable MoneyPerSecond={props.MoneyPerSecond}/>
		<div onClick={props.onUpgrade}>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>Upgrade: ${props.UpgradePrice}</div>
		</div>
		
		<div onClick={props.OnSell}>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>Sell Flower: ${props.SellingPrice}</div>
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
				<th className={'StoreContentStatusTableContent'}><b>Money Per Second</b></th>
				<td className={'StoreContentStatusTableContent'}>{props.MoneyPerSecond}s</td>
				<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
			</tr>
		</table>
	</div>
}
