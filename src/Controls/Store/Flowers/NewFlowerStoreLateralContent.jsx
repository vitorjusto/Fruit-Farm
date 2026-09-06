import flower from '/assets/Flowers/Flower.png'
import { gameManager } from '../../../App'

export default function FlowerStoreLateralContent(props) 
{
	
  return (
	<div className={'NewFlowerStoreLateralContents'} style={{display:(props.visible?'grid':'none')}}>
		{gameManager.flowerManager.AvailableFlowers.map((x, i) => (<NewFlowerButton key={i} newFlowerContent={x} AddFlower={props.AddFlower}/>))}
		
	</div>
  )
}

function NewFlowerButton(props) 
{
	return(	
		<div className="NewFlowerButton" onClick={() => props.AddFlower(props.newFlowerContent)}>
			<div className="NewFlowerNameButton">
				<img src={flower} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
				{props.newFlowerContent.FlowerName}
			</div>
			<div>${props.newFlowerContent.Value}</div>
		</div>
	)
}
