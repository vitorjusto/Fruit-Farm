import moneyIcon from '/assets/Money.png'
import './Styles/StoreItemButton.css'
import FruitSpawner from '../../../Script/Entites/Fruits/FruitSpawner'
import { gameManager } from "../../../App"
import { useState } from 'react';

export default function StoreItemButton(props) {

	var [sellingPrice, setSellingPrice] = useState(props.fruitSpawner.SellingPrice);
	var [maxSpawnCooldown, setMaxSpawnCooldown] = useState(props.fruitSpawner.MaxSpawnCooldown);

	function onClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		props.onSelectedChanged(fruitSpawner, new FruitStatesDTO(setSellingPrice, setMaxSpawnCooldown))
	}

  return (
	<div onClick={onClick} className={'StoreFruitButton'}>
		<img src={moneyIcon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>{props.fruitSpawner.FruitName}</div>
		<div>Price: ${sellingPrice}</div>
		<div>Spawn Timer: {maxSpawnCooldown}s</div>
	</div>
  )
}

export class FruitStatesDTO
{
	constructor(setSellingPrice, setMaxSpawnCooldown)
	{
		this.setSellingPrice = setSellingPrice;
		this.setMaxSpawnCooldown = setMaxSpawnCooldown;
	}
}