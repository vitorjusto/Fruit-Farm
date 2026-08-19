import Swal from 'sweetalert2';
import { gameManager } from '../../../App';
import {useState, useEffect } from 'react'

export default function PrestigeBaseContent({visible}) {

	var [currentDiamonts, setCurrentDiamonts] = useState(0)
	var [fruitSell, setFruitSell] = useState(0)

	var [fruitValue, setFruitValue] = useState(0)
	var [flowerValue, setFlowerValue] = useState(0)
	var [bees, setBees] = useState(0)
	var [treeSpawnTimer, setTreeSpawnTimer] = useState(0)

	var [fruitValueDiamonts, setfruitValueDiamonts] = useState(0)
	var [flowerValueDiamonts, setFlowerValueDiamonts] = useState(0)
	var [beesDiamonts, setBeesDiamonts] = useState(0)
	var [treeSpawnTimerDiamonts, setTreeSpawnTimerDiamonts] = useState(0)

	function OnUpdate()
	{
		setCurrentDiamonts(gameManager.PrestigeManager.Diamonts)
		setFruitSell(gameManager.PrestigeManager.FruitsSellCount)
	}

	useEffect(() => {

		gameManager.PrestigeManager.SetUpdateAction = OnUpdate
		OnUpdate()

	}, []);

	function ChangeValues(pFruitValue, pFlowerValue, pBees, pTreeSpawnTimer)
	{
		var maxValue = pFruitValue + pFlowerValue + pBees + pTreeSpawnTimer
		
		if(maxValue == 0)
		{
			
			setfruitValueDiamonts(gameManager.PrestigeManager.Diamonts)
			setFlowerValueDiamonts(0)
			setBeesDiamonts(0)
			setTreeSpawnTimerDiamonts(0)

			return;
		}

		var fruitValueDiamontsResult = parseInt((pFruitValue / maxValue) * gameManager.PrestigeManager.Diamonts)
		var flowerValueDiamontsResult = parseInt((pFlowerValue / maxValue) * gameManager.PrestigeManager.Diamonts)
		var beesDiamontsResult = parseInt((pBees / maxValue) * gameManager.PrestigeManager.Diamonts)
		var treeSpawnTimerDiamontsResult = parseInt((pTreeSpawnTimer / maxValue) * gameManager.PrestigeManager.Diamonts)

		fruitValueDiamontsResult += gameManager.PrestigeManager.Diamonts - (fruitValueDiamontsResult + flowerValueDiamontsResult + beesDiamontsResult + treeSpawnTimerDiamontsResult)

		setfruitValueDiamonts(fruitValueDiamontsResult)
		setFlowerValueDiamonts(flowerValueDiamontsResult)
		setBeesDiamonts(beesDiamontsResult)
		setTreeSpawnTimerDiamonts(treeSpawnTimerDiamontsResult)
	}

	function onPrestigeClick()
	{
		
		Swal.fire({
					title: 'Do you wanna prestige?',
					icon: "question",
					html: '<div class="PopupSubContainer">All upgrades, branch upgrade, flowers and fruits you have currently will be gone, but you are gonna have the buffs given in the prestige</div>',
					confirmButtonText: 'Yes',
					background:'var(--container)',
					color: 'var(--text-white)',
					confirmButtonColor: 'var(--button-background-color)',
					cancelButtonText: 'No',
  					showCancelButton: true,
				  }).then((result) => {
  					if (result.isConfirmed) 
						gameManager.PrestigeManager.ResetGame(fruitValueDiamonts, flowerValueDiamonts, beesDiamonts, treeSpawnTimerDiamonts)
					});
	}
	
	return (
	<div>
		<div>Diamonts: {currentDiamonts}</div>
		<div>FruitSell: {fruitSell}</div>
		<div className={'TabButton'} onClick={() => onPrestigeClick()}>Do the prestige</div>
		Fruit Value {fruitValue} Diamonts: {fruitValueDiamonts} <br/>
		<input type={'range'} value={fruitValue} onInput={(e) => {
			setFruitValue(Number(e.target.value));
			ChangeValues(Number(e.target.value), flowerValue, bees, treeSpawnTimer)
		}}/><br/>
		Flower Value{flowerValue} Diamonts: {flowerValueDiamonts} <br/>
		<input type={'range'} value={flowerValue} onInput={(e) => {
			setFlowerValue(Number(e.target.value))
			ChangeValues(fruitValue, Number(e.target.value), bees, treeSpawnTimer)
			}}/><br/>
		Bees {bees} Diamonts: {beesDiamonts} <br/>
		<input type={'range'} value={bees} onInput={(e) => {
			setBees(Number(e.target.value))
			ChangeValues(fruitValue, flowerValue, Number(e.target.value), treeSpawnTimer)
		}}/><br/>
		Tree Spawn Timer{treeSpawnTimer} Diamonts: {treeSpawnTimerDiamonts} <br/>
		<input type={'range'} value={treeSpawnTimer} onInput={(e) => {
			setTreeSpawnTimer(Number(e.target.value))
			ChangeValues(fruitValue, flowerValue, bees, Number(e.target.value))
		}}/><br/>
		Any leftover diamonts goes to Fruit Value
	</div>
  )
}