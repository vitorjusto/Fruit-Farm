import './Styles/StoreLateralContent.css'
import { gameManager } from "../../../App"
import UpgradeTable from './FruitUpgradeTable'
import BranchUpgrade from './FruitBranchUpgrade'
import Swal from 'sweetalert2'

export default function StoreFruitLateralContent(props) {

	function upgradeFruit()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		fruitSpawner.UpgradeFruit()

		props.SelectedFruitStatesDTO.setSellingPrice(fruitSpawner.SellingPrice)
		props.SelectedFruitStatesDTO.setMaxSpawnCooldown(fruitSpawner.MaxSpawnCooldown)
		
		props.onUpdate(fruitSpawner, props.SelectedFruitStatesDTO)
	}

	function OnFertilizerClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		if(fruitSpawner.IsFertilizerActive())
		{
			Swal.fire({
				title: "You aready using this item.",
				icon: "info",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}
		else if(gameManager.ItemManager.FertilizerCount > 0)
		{
			Swal.fire({
				title: 'Do you wanna use Fertilizer?',
				icon: "question",
				html: '',
				confirmButtonText: 'Yes',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				cancelButtonText: 'No',
				showCancelButton: true,
			  }).then((result) => {
				if (result.isConfirmed) 
				{
					gameManager.ItemManager.FertilizerCount -= 1
					fruitSpawner.ActivateFertilizer()
				}
				});
		
		}else
		{
			Swal.fire({
				title: "You Don't have Fertilizer, you can buy more in the shop.",
				icon: "error",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}
	}

	function OnHoneyClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		if(fruitSpawner.IsHoneyActive())
		{
			Swal.fire({
				title: "You aready using this item.",
				icon: "info",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}
		else if(gameManager.ItemManager.HoneyCount > 0)
		{
			Swal.fire({
				title: 'Do you wanna use Honey?',
				icon: "question",
				html: '',
				confirmButtonText: 'Yes',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				cancelButtonText: 'No',
				showCancelButton: true,
			  }).then((result) => {
				if (result.isConfirmed) 
				{
					gameManager.ItemManager.HoneyCount -= 1
					fruitSpawner.ActivateHoney()
				}
				});
		
		}else
		{
			Swal.fire({
				title: "You Don't have Honey, you can buy more in the shop.",
				icon: "error",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}

	}

  	return (
		<div className={'StoreLateralContents'}>
			
			<div onClick={() => OnFertilizerClick()} className={'ItemButton'}></div>
			<div onClick={() => OnHoneyClick()} className={'ItemButton2'}></div>
			<div className={'StoreContentName'}>{props.Text}</div>
			<div className={'StoreContentLevel'}>Level: {props.Level}</div>
			<div className={'StoreContentDescritpion'}>{props.Description}</div>
			<BranchUpgrade onUpgradeClick={props.onUpdate} 
						   AvaliableBranchUpgrade={props.AvaliableBranchUpgrade} 
						   fruitId={props.fruitId}
						   SelectedFruitStatesDTO={props.SelectedFruitStatesDTO}/>
	
			<UpgradeTable SellingPrice={props.SellingPrice} SpawnTimer={props.SpawnTimer} NextSelectedSpawnTimer={props.NextSelectedSpawnTimer} NextSelectedUpgradePrice={props.NextSelectedUpgradePrice}/>
			<div>
				<div onClick={upgradeFruit} className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>{props.UpgradePrice}</div>
			</div>
		</div>
  	)
}