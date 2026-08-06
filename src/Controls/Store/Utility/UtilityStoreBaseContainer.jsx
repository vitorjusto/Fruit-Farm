import { useState } from "react"
import { gameManager } from "../../../App"
import UtilityStoreLateralContent from "./UtilityStoreLateralContent"
import FruitSpawner from "../../../Script/Fruits/Entites/FruitSpawner"
import '../Styles/StoreBaseContent.css'
import StoreItemButton from './StoreItemButton';

export default function UtilityStoreBaseContainer() 
{
	function onUpgradeClick()
	{
		selectedfruitSpawner.UpgradeFruit()
		onClick(selectedfruitSpawner)
	}

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					<StoreItemButton/>
					<StoreItemButton/>
					<StoreItemButton/>
					<StoreItemButton/>
					<StoreItemButton/>
				</div>
				<UtilityStoreLateralContent 
						onUpgradeClick={onUpgradeClick}/>
			</div>
	)
}