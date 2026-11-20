import './Styles/StoreItemButton.css'
import { gameManager } from "../../../App"
import { useState, useEffect } from 'react';
import FruitStatesDTO from '../../../Script/Fruits/DTOs/FruitStatesDTO'
import { ESeason, EPeriod } from '../../../Script/Fruits/Enums/FruitsEnums';

export default function StoreItemButton(props) {

	var [sellingPrice, setSellingPrice] = useState(props.fruitSpawner.GetSellingPrice());
	var [maxSpawnCooldown, setMaxSpawnCooldown] = useState(props.fruitSpawner.GetSpawnTimer());
	var [bgColor, setBgColor] = useState('var(--Store-Button-Color)');
	var [nameSize, setNameSize] = useState('x-large');

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
			return 'StoreSummerFruitButtonColor'
		if(fruitSpawner.Season == ESeason.Fall)
			return 'StoreFallFruitButtonColor'
		if(fruitSpawner.Season == ESeason.Winter)
			return 'StoreWinterFruitButtonColor'
		if(fruitSpawner.Season == ESeason.Spring)
			return 'StoreSpringFruitButtonColor'

		if(fruitSpawner.Period == EPeriod.Day)
			return 'StoreDayFruitButtonColor'
		if(fruitSpawner.Period == EPeriod.Afternoon)
			return 'StoreAfternoonFruitButtonColor'
		if(fruitSpawner.Period == EPeriod.Night)
			return 'StoreNightFruitButtonColor'

		return 'StoreRegularFruitButtonColor'
	}

	useEffect(() => {
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		fruitSpawner.onBranchUpdatedEvent = () => onUpdate()
		
		setBgColor(GetBackgroundColor())
		setNameSize(props.fruitSpawner.FruitName.length > 10? 'large':'x-large')
	}, []);
	
	function onClick()
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)
		props.onSelectedChanged(fruitSpawner, new FruitStatesDTO(setSellingPrice, setMaxSpawnCooldown))
	}

	var a = `StoreFruitButton ${GetBackgroundColor()}`
  return (
	<div onClick={onClick} className={a}>
			<div className="crop-box">
  				<img src={`/assets/Fruits/${props.fruitSpawner.FruitName}.png`} style={{ imageRendering: 'pixelated', position: 'absolute', top: sy, left: sx}} />
		</div>
			<div style={{textAlign:'center', fontSize: nameSize}}>{props.fruitSpawner.FruitName}</div>
			<div>Price: ${sellingPrice}</div>
			<div>Spawn: {maxSpawnCooldown.toFixed(2)}s</div>
	</div>
  )
}