import './Styles/Flowers.css'
import FlowerStoreLateralContent from './FlowerStoreLateralContent'
import NewFlowerStoreLateralContent from './NewFlowerStoreLateralContent'
import FlowerUpgradeButton from './FlowerUpgradeButton'
import NewFlowerButton from './NewFlowerButton'
import '../Styles/StoreBaseContent.css'
import {gameManager} from '../../../App'
import {useState, useEffect} from 'react'
import {ConvertMoneyNumber} from '../../../Script/Shareds/Functions/NumberConverter'
import Swal from 'sweetalert2'

export default function FlowersStoreBaseContainer()
{
	var [selectedFlowerName, setSelectedFlowerName] = useState("")
	var [selectedLevel, setSelectedLevel] = useState("")
	var [selectedDescription, setSelectedDescription] = useState("")
	var [selectedMoneyPerSecond, setSelectedMoneyPerSecond] = useState("")
	var [nextMoneyPerSecond, setNextMoneyPerSecond] = useState("")
	var [selectedSellingPrice, setSelectedSellingPrice] = useState("")
	var [selectedUpgradePrice, setSelectedUpgradePrice] = useState("")
	var [selectedFlowerId, setSelectedFlowerId] = useState("")
	var [avaliableBranchUpgrade, setAvaliableBranchUpgrade] = useState(null)

	var [newFlowerVisible, setNewFlowerVisible] = useState(false)
	var [upgradeFlowerVisible, setupgradeFlowerVisible] = useState(false)

	var [flowerContents, setFlowerContents] = useState(null)
	var [newFlowerButton, setNewFlowerButton] = useState(null)

	function AddFlower(newFlowerContent)
	{
		var newId = gameManager.flowerManager.AddFlower(newFlowerContent)

		if(newId == -1)
			return;
		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))

		onFlowerSelected(newId)
		UpdateNewFlowerButton()
	}

	function onNewFlowerClick()
	{
		setNewFlowerVisible(true)
		setupgradeFlowerVisible(false)
		UpdateNewFlowerButton()
	}

	function onFlowerSelected(flowerId)
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == flowerId);
		
		setSelectedFlowerId(flowerId)
		setSelectedFlowerName(flower.FlowerName)
		setSelectedLevel(flower.Level)
		setSelectedDescription(flower.Description)
		setSelectedMoneyPerSecond(ConvertMoneyNumber(flower.GetMoneyPerSecond()))
		setNextMoneyPerSecond(ConvertMoneyNumber(flower.GetNextMoneyPerSecond()))
		setSelectedSellingPrice(ConvertMoneyNumber(flower.SellingPrice))
		setSelectedUpgradePrice(ConvertMoneyNumber(flower.UpgradePrice))
		setAvaliableBranchUpgrade(flower.AvailableBranchUpgrade)
		
		setNewFlowerVisible(false)
		setupgradeFlowerVisible(true)
	}

	function OnItemUsed()
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == selectedFlowerId);

		if(flower.IsButterflyActive())
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
		else if(gameManager.ItemManager.ButterflyCount > 0)
		{
			Swal.fire({
				title: 'Do you wanna use butterfly?',
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
					gameManager.ItemManager.ButterflyCount -= 1
					flower.ActivateButterfly()
				}
				});
		
		}else
		{
			Swal.fire({
				title: "You Don't have butterfly, you can buy more in the shop.",
				icon: "error",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}
	}

	function onUpgrade()
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == selectedFlowerId);
		flower.UpgradeFlower()

		onFlowerSelected(selectedFlowerId)
		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))
	}

	function OnSell()
	{
		gameManager.flowerManager.SellFlower(selectedFlowerId)
		ClearSelectedFlower()
		UpdateNewFlowerButton()

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

	function UpdateNewFlowerButton()
	{
		if(gameManager.flowerManager.Flowers.length == gameManager.flowerManager.MaxFlowers)
		{
			setNewFlowerButton(<></>)
		}else
		{
			setNewFlowerButton(<NewFlowerButton onClick={onNewFlowerClick}/>)
				
		}
	}

	useEffect(() => {

		if(!gameManager)
			return;

		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton flower={v} onClick={onFlowerSelected} key={i}/>)))
		UpdateNewFlowerButton()

	}, []);

	return(<div className="ControlContent">
				<div className="StoreButtonsBase">
					{flowerContents}
					{newFlowerButton}
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
										NextMoneyPerSecond={nextMoneyPerSecond}
										OnItemUsed={() =>  OnItemUsed()}
										/>
				<NewFlowerStoreLateralContent 
										visible={newFlowerVisible}
										AddFlower={AddFlower}/>
			</div>
	)
}