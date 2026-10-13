import Apple from '/assets/Fruits/Apple.png'
import './Styles/StoreItemButton.css'
import FruitSpawner from '../../../Script/Fruits/Entites/FruitSpawner'
import { gameManager } from "../../../App"
import { useState, useEffect } from 'react';
import FruitStatesDTO from '../../../Script/Fruits/DTOs/FruitStatesDTO'
import {ConvertMoneyNumber} from '../../../Script/Shareds/Functions/NumberConverter'
import { ESeason, EPeriod } from '../../../Script/Fruits/Enums/FruitsEnums';

export default function StoreItemButton(props) {

	var [sellingPrice, setSellingPrice] = useState(props.fruitSpawner.GetSellingPrice());
	var [maxSpawnCooldown, setMaxSpawnCooldown] = useState(props.fruitSpawner.GetSpawnTimer());
	var [bgColor, setBgColor] = useState('var(--Store-Button-Color)');

	var [sx, setSX] = useState(0);
	var [sy, setSY] = useState(0);

	function onUpdate()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		setSX(Math.floor((fruitSpawner.BranchUpgradeId - 1)% 6) * -32)
		setSY(Math.floor((fruitSpawner.BranchUpgradeId - 1)/ 6) * -32)
	}
	
	function GetBackgroundColor()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		if(fruitSpawner.Season == ESeason.Summer)
			return 'var(--Store-Button-Color-Summer)'
		if(fruitSpawner.Season == ESeason.Fall)
			return 'var(--Store-Button-Color-Fall)'
		if(fruitSpawner.Season == ESeason.Winter)
			return 'var(--Store-Button-Color-Winter)'
		if(fruitSpawner.Season == ESeason.Spring)
			return 'var(--Store-Button-Color-Spring)'

		if(fruitSpawner.Period == EPeriod.Day)
			return 'var(--Store-Button-Color-Day)'
		if(fruitSpawner.Period == EPeriod.Afternoon)
			return 'var(--Store-Button-Color-Afternoon)'
		if(fruitSpawner.Period == EPeriod.Night)
			return 'var(--Store-Button-Color-Night)'

		return 'var(--Store-Button-Color)'
	}

	useEffect(() => {
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		fruitSpawner.onBranchUpdatedEvent = () => onUpdate()
		
		setBgColor(GetBackgroundColor())

	}, []);
	
	function onClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		props.onSelectedChanged(fruitSpawner, new FruitStatesDTO(setSellingPrice, setMaxSpawnCooldown))
	}

  return (
	<div onClick={onClick} className={'StoreFruitButton'} style={{backgroundColor: bgColor}}>
		<div className="crop-box">
  			<img src={`/assets/Fruits/${props.fruitSpawner.FruitName}.png`} style={{ imageRendering: 'pixelated', position: 'absolute', top: sy, left: sx}} />
	</div>
		<div style={{textAlign:'center', fontSize:'x-large'}}>{props.fruitSpawner.FruitName}</div>
		<div>Price: ${sellingPrice}</div>
		<div>Spawn: {maxSpawnCooldown.toFixed(2)}s</div>
	</div>
  )
}