export default function StoreItemButton(props) {

  return (
	<div onClick={props.onClick} className={'StoreButton'}>
		<img src={props.Icon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated', scale: '2' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>{props.ItemName}</div>
	</div>
  )
}