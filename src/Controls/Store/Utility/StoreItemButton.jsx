import moneyIcon from '/assets/Money.png'
import './Styles/StoreItemButton.css'
import FruitSpawner from '../../../Script/Fruits/Entites/FruitSpawner'

export default function StoreItemButton(props) {

  return (
	<div onClick={props.onClick} className={'StoreUtilityButton'}>
		<img src={props.Icon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated', scale: '2' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>{props.ItemName}</div>
	</div>
  )
}