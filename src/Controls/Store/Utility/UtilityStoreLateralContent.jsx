import './Styles/StoreLateralContent.css'
import { useState } from 'react'

export default function UtilityStoreLateralContent(props) {

  return (
	<div className={'StoreLateralContents'}>
		<div className={'StoreContentName'}>{props.Name}</div>
		<div className={'StoreContentLevel'}>Level: {props.Level}</div>
		<div className={'StoreContentDescritpion'}>{props.Description}</div>
		<BranchUpgrade 
			BranchUpgrade={props.BranchUpgrade}
			BranchUpgradeAction={props.BranchUpgradeAction}
		/>
		<UpgradeTable 
			UpgradeText1={props.UpgradeText1} 
			UpgradeValue1={props.UpgradeValue1} 
			UpgradeNextValue1={props.UpgradeNextValue1} 

			UpgradeText2={props.UpgradeText2} 
			UpgradeValue2={props.UpgradeValue2} 
			UpgradeNextValue2={props.UpgradeNextValue2}
		/>
		<div onClick={props.UpgradeAction}>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>{props.UpgradePrice}</div>
		</div>
	</div>
  )
}

export function BranchUpgrade(props) 
{
	const [description, setDescription] = useState('')
	return <div>
		<div className={'StoreContentBranchUpgrade'} style={{ height: '100%', display: props.BranchUpgrade?'inline':'none'}}>
			<div className={'StoreContentUpgradeDescription'}>{description}</div>
			<div className={'StoreContentUpgradeButtonContainer'}>
				<div onMouseLeave={() => setDescription('')} onMouseEnter={() => setDescription(props.BranchUpgrade.Upgrade1.Description)} onClick={() => props.BranchUpgradeAction(props.BranchUpgrade.Upgrade1.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.BranchUpgrade? props.BranchUpgrade.Upgrade1.Name : ""}</div>
				<div onMouseLeave={() => setDescription('')} onMouseEnter={() => setDescription(props.BranchUpgrade.Upgrade2.Description)} onClick={() => props.BranchUpgradeAction(props.BranchUpgrade.Upgrade2.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.BranchUpgrade? props.BranchUpgrade.Upgrade2.Name : ""}</div>
				<div onMouseLeave={() => setDescription('')} onMouseEnter={() => setDescription(props.BranchUpgrade.Upgrade3.Description)} onClick={() => props.BranchUpgradeAction(props.BranchUpgrade.Upgrade3.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.BranchUpgrade? props.BranchUpgrade.Upgrade3.Name : ""}</div>
			</div>
		</div>

	</div>
}

function UpgradeTable(props) 
{
	return <div className={'StoreContentStatus'}>
		<table className={'StoreContentStatusTable'}>
			<thead>
				<tr>
					<th></th>
					<th className={'StoreContentStatusTableContent'}>Current Level</th>
					<th className={'StoreContentStatusTableContent'}>Next Level</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>{props.UpgradeText1}</b></th>
					<td className={'StoreContentStatusTableContent'}>{props.UpgradeValue1}</td>
					<td className={'StoreContentStatusTableContent'}>{props.UpgradeNextValue1}</td>
				</tr>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>{props.UpgradeText2}</b></th>
					<td className={'StoreContentStatusTableContent'}>{props.UpgradeValue2}</td>
					<td className={'StoreContentStatusTableContent'}>{props.UpgradeNextValue2}</td>
				</tr>
			</tbody>
		</table>
	</div>
}
