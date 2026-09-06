import flower from '/assets/Flowers/Flower.png'
import {ConvertMoneyNumber} from '../../../Script/Shareds/Functions/NumberConverter.js'

export default function FlowerUpgradeButton(props)
{
	return(<div className="buttonContainer" onClick={() => props.onClick(props.flower.Id)}>
		<img src={flower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div><div className="FlowerButtonName">{props.flower.FlowerName}</div>{ConvertMoneyNumber(props.flower.GetMoneyPerSecond()) + "/s"}</div>
	</div>)
}