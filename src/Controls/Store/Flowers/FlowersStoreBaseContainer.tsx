import './Styles/Flowers.css'
import flower from '../../../assets/Flowers/Flower.png'
import newFlower from '../../../assets/Flowers/New Flower Icon.png'
import FlowerStoreLateralContent from './FlowerStoreLateralContent'

export default function FlowersStoreBaseContainer() 
{
	return(<div className="ControlContent">
				<div className="StoreButtonsBase">
					<FlowerUpgradeButton/>
					<NewFlowerButton/>
				</div>
				<FlowerStoreLateralContent/>
			</div>
	)
}

export function FlowerUpgradeButton() 
{
	return(<div className="buttonContainer">
		<img src={flower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div>Flower Name<br/> Money per second</div>
	</div>)
}

export function NewFlowerButton() 
{
	return(<div className="buttonContainer">
		<img src={newFlower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<p>New Flower</p>
	</div>)
}