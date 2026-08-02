import './Styles/StoreLateralContent.css'
import { gameManager } from "../../../App"

export default function StoreFruitLateralContent(props) {

	function upgradeFruit()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		fruitSpawner.UpgradeFruit()

		props.SelectedFruitStatesDTO.setSellingPrice(fruitSpawner.SellingPrice)
		props.SelectedFruitStatesDTO.setMaxSpawnCooldown(fruitSpawner.MaxSpawnCooldown)
		
		props.onUpdate(fruitSpawner, props.SelectedFruitStatesDTO)
	}

  return (
	<div className={'StoreLateralContents'}>
		<div className={'StoreContentName'}>{props.Text}</div>
		<div className={'StoreContentLevel'}>Level: {props.Level}</div>
		<div className={'StoreContentDescritpion'}>{props.Description}</div>
		<BranchUpgrade onUpgradeClick={props.onUpdate} 
					   AvaliableBranchUpgrade={props.AvaliableBranchUpgrade} 
					   fruitId={props.fruitId}
					   SelectedFruitStatesDTO={props.SelectedFruitStatesDTO}/>

		<UpgradeTable SellingPrice={props.SellingPrice} SpawnTimer={props.SpawnTimer}/>
		<div>
			<div onClick={upgradeFruit} className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>{props.UpgradePrice}</div>
		</div>
	</div>
  )
}

function BranchUpgrade(props) {

	function upgrade(id)
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		fruitSpawner.UpdateBranchUpgrade(id)

		props.SelectedFruitStatesDTO.setSellingPrice(fruitSpawner.SellingPrice)
		props.SelectedFruitStatesDTO.setMaxSpawnCooldown(fruitSpawner.MaxSpawnCooldown)
		
		props.onUpgradeClick(fruitSpawner, props.SelectedFruitStatesDTO)

	}

	return <div>
		<div className={'StoreContentBranchUpgrade'} style={{ height: '100%', display: props.AvaliableBranchUpgrade?'inline':'none'}}>
			<div className={'StoreContentUpgradeDescription'}>Description</div>
			<div className={'StoreContentUpgradeButtonContainer'}>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade1.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade1.Name : ""}</div>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade2.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade2.Name : ""}</div>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade3.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade3.Name : ""}</div>
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
