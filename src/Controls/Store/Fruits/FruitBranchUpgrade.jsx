import {gameManager} from '../../../App'
import {ConvertMoneyNumber} from '../../../Script/Shareds/Functions/NumberConverter'
import {useState}  from 'react';

export default function FruitBranchUpgrade(props) 
{     
	var [description, setDescription] = useState('');

	function upgrade(id)
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		fruitSpawner.UpdateBranchUpgrade(id)

		props.SelectedFruitStatesDTO.setSellingPrice(ConvertMoneyNumber(fruitSpawner.SellingPrice))
		props.SelectedFruitStatesDTO.setMaxSpawnCooldown(fruitSpawner.MaxSpawnCooldown)
		
		props.onUpgradeClick(fruitSpawner, props.SelectedFruitStatesDTO)

	}

	return <div>
		<div className={'StoreContentBranchUpgrade'} style={{ height: '100%', display: props.AvaliableBranchUpgrade?'inline':'none'}}>
			<div className={'StoreContentUpgradeDescription'}>{description}</div>
			<div className={'StoreContentUpgradeButtonContainer'}>
				<div onMouseEnter={() => setDescription(props.AvaliableBranchUpgrade.Upgrade1.Description)} onMouseLeave={() => setDescription('')} onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade1.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade1.Name : ""}</div>
				<div onMouseEnter={() => setDescription(props.AvaliableBranchUpgrade.Upgrade2.Description)} onMouseLeave={() => setDescription('')} onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade2.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade2.Name : ""}</div>
				<div onMouseEnter={() => setDescription(props.AvaliableBranchUpgrade.Upgrade3.Description)} onMouseLeave={() => setDescription('')} onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade3.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade3.Name : ""}</div>
			</div>
		</div>

	</div>
}