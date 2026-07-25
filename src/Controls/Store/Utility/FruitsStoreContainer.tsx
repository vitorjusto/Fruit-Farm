import { useState } from "react"
import { gameManager } from "../../../App"
import StoreFruitLateralContent from "./StoreLateralContent"
import FruitSpawner from "../../../Script/Entites/Fruits/FruitSpawner"
import '../Styles/StoreBaseContent.css'
import StoreItemButton from './StoreItemButton';

export default function FruitsStoreContainer() 
{
	var [selectedText, setSelectedText] = useState('')
	var [selectedLevel, setSelectedLevel] = useState(0)
	var [selectedDescription, setDescription] = useState('')
	var [selectedSellingPrice, setSelectedSellingPrice] = useState(0)
	var [selectedSpawnTimer, setSelectedSpawnTimer] = useState(0)
	var [selectedUpgradePrice, setSelectedUpgradePrice] = useState(0)
	var [selectedAvaliableBranchUpgrade, setSelectedAvaliableBranchUpgrade] = useState(false)
	
	var [selectedfruitSpawner, setselectedfruitSpawner] = useState(null)

	function onClick(fruitSpawner : FruitSpawner)
	{
		setSelectedText(fruitSpawner.FruitName)
		setSelectedLevel(fruitSpawner.Level)
		setDescription(fruitSpawner.Description)

		setSelectedSellingPrice(fruitSpawner.SellingPrice)
		setSelectedSpawnTimer(fruitSpawner.MaxSpawnCooldown)
		setSelectedUpgradePrice(fruitSpawner.UpgradePrice)

		setSelectedAvaliableBranchUpgrade(fruitSpawner.AvailableBranchUpgrade)

		setselectedfruitSpawner(fruitSpawner)
	}

	function fruitStoreButtons()
	{
		if(!gameManager)
			return null

		return gameManager.fruitManager.FruitsSpawners.map((x, i) => (<StoreItemButton onSelectedChanged={onClick} fruitSpawner={x}/>))
	}
	
	function onUpgradeClick()
	{
		selectedfruitSpawner.UpgradeFruit()
		onClick(selectedfruitSpawner)
	}

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					{fruitStoreButtons()}
				</div>
				<StoreFruitLateralContent 
						onUpgradeClick={onUpgradeClick}
						UpgradePrice={selectedUpgradePrice}
						Text={selectedText} 
						Level={selectedLevel} 
						Description={selectedDescription} 
						SellingPrice={selectedSellingPrice} 
						AvaliableBranchUpgrade={selectedAvaliableBranchUpgrade}
						SpawnTimer={selectedSpawnTimer}/>
			</div>
	)
}