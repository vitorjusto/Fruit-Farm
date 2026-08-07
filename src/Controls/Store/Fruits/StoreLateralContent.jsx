import './Styles/StoreLateralContent.css'
import { gameManager } from "../../../App"
import UpgradeTable from './FruitUpgradeTable'
import BranchUpgrade from './FruitBranchUpgrade'

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