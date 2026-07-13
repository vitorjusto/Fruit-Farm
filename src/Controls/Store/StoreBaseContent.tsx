import './Styles/StoreBaseContent.css'
import StoreItemButton from './StoreItemButton'
import StoreFruitLateralContent from './StoreLateralContent'
import {useState} from 'react'
import FruitSpawner from '../../Script/Entites/Fruits/FruitSpawner'

export default function StoreBaseContent({visible}) {

	var [selectedText, setSelectedText] = useState('')
	var [selectedLevel, setSelectedLevel] = useState(0)
	var [selectedDescription, setDescription] = useState('')
	var [selectedSellingPrice, setSelectedSellingPrice] = useState(0)
	var [selectedSpawnTimer, setSelectedSpawnTimer] = useState(0)
	var [selectedUpgradePrice, setSelectedUpgradePrice] = useState(0)
	var [selectedAvaliableBranchUpgrade, setSelectedAvaliableBranchUpgrade] = useState(false)

	function onClick(fruitSpawner : FruitSpawner)
	{
		setSelectedText(fruitSpawner.FruitName)
		setSelectedLevel(fruitSpawner.Level)
		setDescription(fruitSpawner.Description)

		setSelectedSellingPrice(fruitSpawner.SellingPrice)
		setSelectedSpawnTimer(fruitSpawner.MaxSpawnCooldown)
		setSelectedUpgradePrice(fruitSpawner.UpgradePrice)

		setSelectedAvaliableBranchUpgrade(fruitSpawner.AvailableBranchUpgrade)
	}

  	return (
	<div style={{display: (visible? 'inline' :'none')}}>
		<div className={'BaseControl'}>
			<div className={'TabControl'} >
				<div className={'TabButton'}>Fruits</div>
				<div className={'TabButton'}>Flower</div>
				<div className={'TabButton'}>Utility</div>
			</div>
			<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					<StoreItemButton onSelectedChanged={onClick} fruitSpawner={new FruitSpawner(null, null, "Apple", 2, "Simple Fruit", 20, 2)}/>
					<StoreItemButton onSelectedChanged={onClick} fruitSpawner={new FruitSpawner(null, null, "Apple 2", 3, "Simple Fruit2", 21, 3)}/>
				</div>
				<StoreFruitLateralContent 
						UpgradePrice={selectedUpgradePrice}
						Text={selectedText} 
						Level={selectedLevel} 
						Description={selectedDescription} 
						SellingPrice={selectedSellingPrice} 
						AvaliableBranchUpgrade={selectedAvaliableBranchUpgrade}
						SpawnTimer={selectedSpawnTimer}/>
			</div>
		</div>
	</div>
  )
}

