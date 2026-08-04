import './Styles/Flowers.css'
import flower from '/assets/Flowers/Flower.png'
import newFlower from '/assets/Flowers/New Flower Icon.png'
import FlowerStoreLateralContent from './FlowerStoreLateralContent'
import NewFlowerStoreLateralContent from './NewFlowerStoreLateralContent'
import {gameManager} from '../../../App'
import {useState, useEffect} from 'react'

export default function FlowersStoreBaseContainer()
{
	var [selectedFlowerName, setSelectedFlowerName] = useState("")
	var [selectedLevel, setSelectedLevel] = useState("")
	var [selectedDescription, setSelectedDescription] = useState("")
	var [selectedMoneyPerSecond, setSelectedMoneyPerSecond] = useState("")

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
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id = flowerId);
		console.log(flower.FlowerName)

		setSelectedFlowerName(flower.FlowerName)
		setSelectedLevel(flower.Level)
		setSelectedDescription(flower.Description)
		setSelectedMoneyPerSecond(flower.MoneyPerSecond)

		setNewFlowerVisible(false)
		setupgradeFlowerVisible(true)
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
										visible={upgradeFlowerVisible}
										FlowerName={selectedFlowerName}
										Level={selectedLevel}
										Description={selectedDescription}
										MoneyPerSecond={selectedMoneyPerSecond}/>

				<NewFlowerStoreLateralContent 
										visible={newFlowerVisible}
										AddFlower={AddFlower}/>
			</div>
	)
}

export function FlowerUpgradeButton(props)
{
	return(<div className="buttonContainer" onClick={() => props.onClick(props.flower.Id)}>
		<img src={flower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div>Flower Name<br/> Money per second</div>
	</div>)
}

export function NewFlowerButton(props)
{
	return(<div className="buttonContainer" onClick={props.onClick}>
		<img src={newFlower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<p>New Flower</p>
	</div>)
}