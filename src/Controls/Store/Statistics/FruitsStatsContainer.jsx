import { useEffect, useState } from 'react'
import './Styles/Statistics.css'
import FruitSpawner from '../../../Script/Fruits/Entites/FruitSpawner'
import { gameManager } from '../../../App'
import StoreItemButton from '../Fruits/StoreItemButton'
import FruitsStatisticsLateralContainer	from './FruitsStatisticsLateralContainer'

export default function FruitsStatsContainer() 
{
	var [selectedfruitSpawner, setselectedfruitSpawner] = useState(null)

	var [fruitStoreButtons, setFruitStoreButton] = useState(null)

	useEffect(() => {

		if(!gameManager)
			return;

	}, []);

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
				</div>
				<FruitsStatisticsLateralContainer/>
			</div>
	)
}