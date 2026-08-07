import newFlower from '/assets/Flowers/New Flower Icon.png'

export default function NewFlowerButton(props)
{
	return(<div className="buttonContainer" onClick={props.onClick}>
		<img src={newFlower} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<p>New Flower</p>
	</div>)
}