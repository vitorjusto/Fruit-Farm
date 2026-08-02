import moneyIcon from '/assets/Money.png'
import './Styles/StoreItemButton.css'
import FruitSpawner from '../../../Script/Entites/Fruits/FruitSpawner'
import { gameManager } from "../../../App"

export default function StoreItemButton(props) {

	function onClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		props.onSelectedChanged(fruitSpawner)
	}

  return (
	<div onClick={onClick} className={'StoreFruitButton'}>
		<img src={moneyIcon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>{props.fruitSpawner.FruitName}</div>
		<div>Price: ${props.fruitSpawner.SellingPrice}</div>
		<div>Spawn Timer: {props.fruitSpawner.MaxSpawnCooldown}s</div>
	</div>
  )
}