import flower from '/assets/Flowers/Flower.png'
import { gameManager } from '../../../App'

export default function FlowerStoreLateralContent(props) 
{
	
  return (
	<div className={'StoreLateralContents'} style={{display:(props.visible?'grid':'none')}}>
		<NewFlowerButton AddFlower={props.AddFlower}/>
	</div>
  )
}

function NewFlowerButton(props) 
{
	return(	
		<div className="NewFlowerButton" onClick={props.AddFlower}>
			<div className="NewFlowerNameButton">
				<img src={flower} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
				Flower Name
			</div>
			<div>$20</div>
		</div>
	)
}
