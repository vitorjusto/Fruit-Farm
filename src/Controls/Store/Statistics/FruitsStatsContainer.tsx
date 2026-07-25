import { useEffect, useState } from 'react'
import './Styles/Statistics.css'
import FruitSpawner from '../../../Script/Entites/Fruits/FruitSpawner'
import { gameManager } from '../../../App'
import StoreItemButton from '../Fruits/StoreItemButton'

export default function FruitsStatsContainer() 
{
	var [selectedfruitSpawner, setselectedfruitSpawner] = useState(null)

	var [fruitStoreButtons, setFruitStoreButton] = useState(null)

	useEffect(() => {

		if(!gameManager)
			return;

		setFruitStoreButton(gameManager.fruitManager.FruitsSpawners.map((x, i) => (<StoreItemButton fruitSpawner={x} key={x.FruitId}/>)))

	}, []);

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					{fruitStoreButtons}
				</div>
				<FruitsStatisticsLateralContainer/>
			</div>
	)
}

export function FruitsStatisticsLateralContainer()
{
	return(
		<div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Total Fruits sell</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Money per seconds</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Tree Size</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Total Fruits Upgrades</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Prestige Made</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Tree Size</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Prestige Made</div>
				<div>20</div>
			</div>

		</div>
	)
}