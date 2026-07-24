import moneyIcon from '../../../assets/Money.png'
import './Styles/StoreItemButton.css'
import FruitSpawner from '../../../Script/Entites/Fruits/FruitSpawner'

export default function StoreItemButton({onSelectedChanged = () => {}, fruitSpawner}) {

  return (
	<div onClick={() => onSelectedChanged(fruitSpawner)} className={'StoreFruitButton'}>
		<img src={moneyIcon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>{fruitSpawner.FruitName}</div>
		<div>Price: ${fruitSpawner.SellingPrice}</div>
		<div>Spawn Timer: {fruitSpawner.MaxSpawnCooldown}s</div>
	</div>
  )
}