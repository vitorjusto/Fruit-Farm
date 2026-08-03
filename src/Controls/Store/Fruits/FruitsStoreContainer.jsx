import { useEffect, useState } from "react"
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
	var [selectedAvaliableBranchUpgrade, setSelectedAvaliableBranchUpgrade] = useState(null)
	var [selectedFruitId, setSelectedFruitId] = useState(0)
	
	var [fruitStoreButtons, setFruitStoreButton] = useState(null)
	var [selectedFruitStatesDTO, setSelectedFruitStatesDTO] = useState(null)

	function onClick(fruitSpawner, fruitStatesDTO)
	{
		setSelectedText(fruitSpawner.FruitName)
		setSelectedLevel(fruitSpawner.Level)
		setDescription(fruitSpawner.Description)

		setSelectedSellingPrice(fruitSpawner.SellingPrice)
		setSelectedSpawnTimer(fruitSpawner.MaxSpawnCooldown)
		setSelectedUpgradePrice(fruitSpawner.UpgradePrice)

		setSelectedFruitId(fruitSpawner.FruitId)
		setSelectedAvaliableBranchUpgrade(fruitSpawner.AvailableBranchUpgrade)

		setSelectedFruitStatesDTO(fruitStatesDTO)

		setFruitStoreButton(gameManager.fruitManager.FruitsSpawners.map((x, i) => (<StoreItemButton onSelectedChanged={onClick} fruitSpawner={x} fruitId={x.FruitId} key={x.FruitId}/>)))
	}
	
	useEffect(() => {

		if(!gameManager)
			return;

		setFruitStoreButton(gameManager.fruitManager.FruitsSpawners.map((x, i) => (<StoreItemButton onSelectedChanged={onClick} fruitSpawner={x} fruitId={x.FruitId} key={x.FruitId}/>)))

	}, []);

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					{fruitStoreButtons}
				</div>
				<StoreFruitLateralContent 
						onUpdate={onClick}
						fruitId={selectedFruitId}
						UpgradePrice={selectedUpgradePrice}
						Text={selectedText} 
						Level={selectedLevel} 
						Description={selectedDescription} 
						SellingPrice={selectedSellingPrice} 
						AvaliableBranchUpgrade={selectedAvaliableBranchUpgrade}
						SpawnTimer={selectedSpawnTimer}
						SelectedFruitStatesDTO={selectedFruitStatesDTO}
						/>
			</div>
	)
}