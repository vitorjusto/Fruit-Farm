import './Styles/Flowers.css'
import FlowerStoreLateralContent from './FlowerStoreLateralContent'
import NewFlowerStoreLateralContent from './NewFlowerStoreLateralContent'
import FlowerUpgradeButton from './FlowerUpgradeButton'
import NewFlowerButton from './NewFlowerButton'
import {gameManager} from '../../../App'
import {useState, useEffect} from 'react'

export default function FlowersStoreBaseContainer()
{
	var [selectedFlowerName, setSelectedFlowerName] = useState("")
	var [selectedLevel, setSelectedLevel] = useState("")
	var [selectedDescription, setSelectedDescription] = useState("")
	var [selectedMoneyPerSecond, setSelectedMoneyPerSecond] = useState("")
	var [selectedSellingPrice, setSelectedSellingPrice] = useState("")
	var [selectedUpgradePrice, setSelectedUpgradePrice] = useState("")
	var [selectedFlowerId, setSelectedFlowerId] = useState("")
	var [avaliableBranchUpgrade, setAvaliableBranchUpgrade] = useState(null)

	var [newFlowerVisible, setNewFlowerVisible] = useState(false)
	var [upgradeFlowerVisible, setupgradeFlowerVisible] = useState(false)

	var [flowerContents, setFlowerContents] = useState(null)

	function AddFlower(flowerId)
	{
		gameManager.flowerManager.AddFlower(flowerId)
		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))
	}

	function onNewFlowerClick()
	{
		setNewFlowerVisible(true)
		setupgradeFlowerVisible(false)
	}

	function onFlowerSelected(flowerId)
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == flowerId);
		
		setSelectedFlowerId(flowerId)
		setSelectedFlowerName(flower.FlowerName)
		setSelectedLevel(flower.Level)
		setSelectedDescription(flower.Description)
		setSelectedMoneyPerSecond(flower.GetMoneyPerSecond())
		setSelectedSellingPrice(flower.SellingPrice)
		setSelectedUpgradePrice(flower.UpgradePrice)
		setAvaliableBranchUpgrade(flower.AvailableBranchUpgrade)
		
		setNewFlowerVisible(false)
		setupgradeFlowerVisible(true)
	}

	function onUpgrade()
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == selectedFlowerId);
		flower.UpgradeFlower()

		onFlowerSelected(selectedFlowerId)
	}

	function OnSell()
	{
		gameManager.flowerManager.SellFlower(selectedFlowerId)
		ClearSelectedFlower()

	}

	function ClearSelectedFlower()
	{
		setSelectedFlowerId("")
		setSelectedFlowerName("")
		setSelectedLevel("")
		setSelectedDescription("")
		setSelectedMoneyPerSecond("")
		setSelectedSellingPrice("")
		setSelectedUpgradePrice("")
		setAvaliableBranchUpgrade(null)

		setNewFlowerVisible(false)
		setupgradeFlowerVisible(false)

		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))
	}

	useEffect(() => {

		if(!gameManager)
			return;

		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))
	}, []);

	return(<div className="ControlContent">
				<div className="StoreButtonsBase">
					{flowerContents}
					<NewFlowerButton onClick={onNewFlowerClick}/>
				</div>
				<FlowerStoreLateralContent
										onUpgrade={onUpgrade}
										visible={upgradeFlowerVisible}
										FlowerName={selectedFlowerName}
										Level={selectedLevel}
										Description={selectedDescription}
										MoneyPerSecond={selectedMoneyPerSecond}
										SellingPrice={selectedSellingPrice}
										UpgradePrice={selectedUpgradePrice}
										OnSell={OnSell}
										AvaliableBranchUpgrade={avaliableBranchUpgrade}
										FlowerId={selectedFlowerId}
										onBranchUpgrade={onFlowerSelected}
										/>

				<NewFlowerStoreLateralContent 
										visible={newFlowerVisible}
										AddFlower={AddFlower}/>
			</div>
	)
}