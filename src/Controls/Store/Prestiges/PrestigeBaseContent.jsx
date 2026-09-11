import Swal from 'sweetalert2';
import { gameManager } from '../../../App';
import {useState, useEffect } from 'react'
import './Prestige.css'

export default function PrestigeBaseContent({visible}) {

	var [currentDiamonts, setCurrentDiamonts] = useState(0)
	var [fruitSell, setFruitSell] = useState(0)

	var [fruitValue, setFruitValue] = useState(25)
	var [flowerValue, setFlowerValue] = useState(25)
	var [bees, setBees] = useState(25)
	var [treeSpawnTimer, setTreeSpawnTimer] = useState(25)

	var [fruitValueDiamonts, setfruitValueDiamonts] = useState(0)
	var [flowerValueDiamonts, setFlowerValueDiamonts] = useState(0)
	var [beesDiamonts, setBeesDiamonts] = useState(0)
	var [treeSpawnTimerDiamonts, setTreeSpawnTimerDiamonts] = useState(0)

	var [currentfruitValueDiamonts, setCurrentfruitValueDiamonts] = useState(0)
	var [currentflowerValueDiamonts, setCurrentFlowerValueDiamonts] = useState(0)
	var [currentbeesDiamonts, setCurrentBeesDiamonts] = useState(0)
	var [currenttreeSpawnTimerDiamonts, setCurrentTreeSpawnTimerDiamonts] = useState(0)

	function OnUpdate()
	{
		setCurrentDiamonts(gameManager.PrestigeManager.Diamonts)
		setFruitSell((gameManager.PrestigeManager.FruitsSellCount / gameManager.PrestigeManager.MaxFruitSellCount) * 100)

		setCurrentfruitValueDiamonts(gameManager.PrestigeManager.fruitValueDiamonts)
		setCurrentFlowerValueDiamonts(gameManager.PrestigeManager.flowerValueDiamonts)
		setCurrentBeesDiamonts(gameManager.PrestigeManager.beesDiamonts)
		setCurrentTreeSpawnTimerDiamonts(gameManager.PrestigeManager.treeSpawnTimerDiamonts)
	}

	useEffect(() => {

		if(!gameManager)
			return
		gameManager.PrestigeManager.SetUpdateAction = OnUpdate
		OnUpdate()
		ChangeValues(fruitValue, flowerValue, bees, treeSpawnTimer)
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
						OnUpdate()
					});
	}
	
	return (
	<div className={'PrestigeContainerBase'}>
		<div></div>
		<div className={'PrestigePanelBase'}>
			<div className={'FruitValueContent'}>
				<p className={'PrestigeTitle'}>Fruit Value</p>
				<input type={'range'} value={fruitValue} onInput={(e) => {
					setFruitValue(Number(e.target.value));
					ChangeValues(Number(e.target.value), flowerValue, bees, treeSpawnTimer)
				}}/><br/>
				<div className="SelectedDiamont">{fruitValueDiamonts}</div>
				<div className="SmallSelectedDiamont">{currentfruitValueDiamonts}</div>
			</div>
			
			<div className={'FlowerValueContent'}>

				<p className={'PrestigeTitle'}>Flower Value</p>

				<input type={'range'} value={flowerValue} onInput={(e) => {
					setFlowerValue(Number(e.target.value))
					ChangeValues(fruitValue, Number(e.target.value), bees, treeSpawnTimer)
					}}/><br/>

				<div className="SelectedDiamont">{flowerValueDiamonts}</div>
				<div className="SmallSelectedDiamont">{currentflowerValueDiamonts}</div>
			</div>

			<div className={'BeesContent'}>
				<p className={'PrestigeTitle'}>Bees</p>
				<input type={'range'} value={bees} onInput={(e) => {
					setBees(Number(e.target.value))
					ChangeValues(fruitValue, flowerValue, Number(e.target.value), treeSpawnTimer)
				}}/><br/>
				<div className="SelectedDiamont">{beesDiamonts}</div>
				<div className="SmallSelectedDiamont">{currentbeesDiamonts}</div>
			</div>
			
			<div className={'TreeSpawnTimeContent'}>

				<p className={'PrestigeTitle'}>Faster Spawn</p>
				<input type={'range'} value={treeSpawnTimer} onInput={(e) => {
					setTreeSpawnTimer(Number(e.target.value))
					ChangeValues(fruitValue, flowerValue, bees, Number(e.target.value))
				}}/><br/>
				<div className="SelectedDiamont">{treeSpawnTimerDiamonts}</div>
				<div className="SmallSelectedDiamont">{currenttreeSpawnTimerDiamonts}</div>
			</div>
		</div>
		<div className="PrestigeLateralContent">

			<p className="DiamontTitle">Prestige</p>
			<div className="TotalDiamontsDisplayContainer">
				<div className="SelectedDiamont">{currentDiamonts}</div>
				<div className="SmallerDiamont"><div className="SellingFruitsProgressFill" style={{width: `${fruitSell}%`}}></div></div>
			</div>
			<div className="SubConatiner">Any leftover diamonts goes to Fruit Value</div>
			
			<div className={'TabButton'} style={{height: '50px'}} onClick={() => onPrestigeClick()}>Do the prestige</div>
		</div>
	</div>
  )
}