import {gameManager} from '../../../App'
import FlowerUpgradeTable from './FlowerUpgradeTable'
import FlowerBranchUpgrade from './FlowerBranchUpgrade'

export default function FlowerStoreLateralContent(props) 
{

  return (
	<div className={'FlowerStoreLateralContents'} style={{display:(props.visible?'grid':'none')}}>
		<div className={'StoreContentName'}>{props.FlowerName}</div>
		<div className={'StoreContentLevel'}>Level: {props.Level}</div>
		<div className={'StoreContentDescritpion'}>{props.Description}</div>
		
		<FlowerBranchUpgrade 
					   AvaliableBranchUpgrade={props.AvaliableBranchUpgrade} 
					   FlowerId={props.FlowerId}
					   onBranchUpgrade={props.onBranchUpgrade}/>

		<FlowerUpgradeTable MoneyPerSecond={props.MoneyPerSecond}/>
		<div onClick={props.onUpgrade}>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>Upgrade: ${props.UpgradePrice}</div>
		</div>
		
		<div onClick={props.OnSell}>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>Sell Flower: ${props.SellingPrice}</div>
		</div>
	</div>
  )
}
