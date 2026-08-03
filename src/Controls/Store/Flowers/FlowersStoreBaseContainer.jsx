import './Styles/Flowers.css'
import flower from '/assets/Flowers/Flower.png'
import newFlower from '/assets/Flowers/New Flower Icon.png'
import FlowerStoreLateralContent from './FlowerStoreLateralContent'
import NewFlowerStoreLateralContent from './NewFlowerStoreLateralContent'
import {gameManager} from '../../../App'
import {useState, useEffect} from 'react'

export default function FlowersStoreBaseContainer()
{
	var flowerStoreLateralContent = (<FlowerStoreLateralContent/>)
	var newFlowerStoreLateralContent = (<NewFlowerStoreLateralContent AddFlower={AddFlower}/>)

	var [flowerContents, setFlowerContents] = useState(null)
	var [lateralContent, setlateralContent] = useState(flowerStoreLateralContent)

	function AddFlower(flowerId)
	{
		gameManager.flowerManager.AddFlower(flowerId)
		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton onClick={onFlowerSelected} key={i}/>)))
	}

	function onNewFlowerClick()
	{
		setlateralContent(newFlowerStoreLateralContent)
	}

	function onFlowerSelected()
	{
		setlateralContent(flowerStoreLateralContent)
	}

	useEffect(() => {

		if(!gameManager)
			return;

		setFlowerContents(gameManager.flowerManager.Flowers.map((v, i) =>  (<FlowerUpgradeButton onClick={onFlowerSelected} key={i}/>)))
	}, []);

	return(<div className="ControlContent">
				<div className="StoreButtonsBase">
					{flowerContents}
					<NewFlowerButton onClick={onNewFlowerClick}/>
				</div>
				{lateralContent}
			</div>
	)
}

export function FlowerUpgradeButton(props)
{
	return(<div className="buttonContainer" onClick={props.onClick}>
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