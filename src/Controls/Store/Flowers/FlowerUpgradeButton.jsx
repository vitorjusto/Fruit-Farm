import flower from '/assets/Flowers/Flower.png'

export default function FlowerUpgradeButton(props)
{
	return(<div className="buttonContainer" onClick={() => props.onClick(props.flower.Id)}>
		<img src={flower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div>Flower Name<br/> Money per second</div>
	</div>)
}