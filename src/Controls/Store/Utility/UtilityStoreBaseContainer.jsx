import { useState } from "react"
import { gameManager } from "../../../App"
import { ChangeTreeBranchUpgrade } from "../../../Script/BranchUpgrade/Functions/TreeBranchUpgrade"
import { ChangeDogBranchUpgrade } from "../../../Script/BranchUpgrade/Functions/DogBranchUpgrade"

import UtilityStoreLateralContent from "./UtilityStoreLateralContent"
import '../Styles/StoreBaseContent.css'
import StoreItemButton from './StoreItemButton';

export default function UtilityStoreBaseContainer() 
{
	var [selectedName, setSelectedName] = useState('')
	var [selectedLevel, setSelectedLevel] = useState('')
	var [selectedDescription, setSelectedDescription] = useState('')

	var [selectedUpgradeText1, setSelectedUpgradeText1] = useState('')
	var [selectedUpgradeValue1, setSelectedUpgradeValue1] = useState('')
	var [selectedUpgradeNextValue1, setSelectedUpgradeNextValue1] = useState('')

	var [selectedUpgradeText2, setSelectedUpgradeText2] = useState('')
	var [selectedUpgradeValue2, setSelectedUpgradeValue2] = useState('')
	var [selectedUpgradeNextValue2, setSelectedUpgradeNextValue2] = useState('')

	var [selectedUpgradePrice, setSelectedUpgradePrice] = useState('')
	var [selectUpgradeAction, setSelectUpgradeAction] = useState(() => {})

	var [selectedBranchUpgrade, setSelectedBranchUpgrade] = useState(() => {})
	var [selectedBranchUpgradeAction, setSelectedBranchUpgradeAction] = useState(() => {})

	function onTreeSelected()
	{
		setSelectedName("Tree")
		setSelectedLevel(gameManager.treeManager.Level)
		setSelectedDescription("This is where fruits come from")
		
		setSelectedUpgradeText1("Size")
		setSelectedUpgradeValue1(gameManager.treeManager.Size)
		setSelectedUpgradeNextValue1(1)

		setSelectedUpgradeText2("Fruit Spawn Timer Modifier")
		setSelectedUpgradeValue2(gameManager.treeManager.FruitSpawnModifier)
		setSelectedUpgradeNextValue2(0.01)

		setSelectedUpgradePrice(gameManager.treeManager.UpgradePrice)
		setSelectUpgradeAction(() => onTreeUpgrade)

		setSelectedBranchUpgrade(gameManager.treeManager.BranchUpgrade)
		setSelectedBranchUpgradeAction(() => (id) => ChangeTreeBranchUpgrade(gameManager.treeManager, id))
	}

	function onTreeUpgrade()
	{
		gameManager.treeManager.Upgrade()
		setSelectedUpgradePrice(gameManager.treeManager.UpgradePrice)
		setSelectedUpgradeValue1(gameManager.treeManager.Size)
		setSelectedLevel(gameManager.treeManager.Level)
		setSelectedUpgradeValue2(gameManager.treeManager.FruitSpawnModifier)
		
		setSelectedBranchUpgrade(gameManager.treeManager.BranchUpgrade)
		setSelectedBranchUpgradeAction(() => (id) => ChangeTreeBranchUpgrade(gameManager.treeManager, id))
		
	}


	function onDogSelected()
	{
		setSelectedName("Dog")
		setSelectedLevel(gameManager.DogManager.Level)
		setSelectedDescription("Is so friendly that gives you money when you pet (click).")
		
		setSelectedUpgradeText1("Money per click")
		setSelectedUpgradeValue1(gameManager.DogManager.ClickValue)
		setSelectedUpgradeNextValue1(1)

		setSelectedUpgradeText2("Cooldown")
		setSelectedUpgradeValue2(gameManager.DogManager.MaxCooldown)
		setSelectedUpgradeNextValue2(0.01)

		setSelectedUpgradePrice(gameManager.DogManager.UpgradePrice)
		setSelectUpgradeAction(() => onDogUpgrade)

		setSelectedBranchUpgrade(gameManager.DogManager.BranchUpgrade)
		setSelectedBranchUpgradeAction(() => (id) => ChangeDogBranchUpgrade(gameManager.DogManager, id))
	}

	function onDogUpgrade()
	{
		gameManager.DogManager.Upgrade()
		setSelectedUpgradePrice(gameManager.DogManager.UpgradePrice)
		setSelectedUpgradeValue1(gameManager.DogManager.ClickValue)
		setSelectedLevel(gameManager.DogManager.Level)
		setSelectedUpgradeValue2(gameManager.DogManager.MaxCooldown)
		
		setSelectedBranchUpgrade(gameManager.DogManager.BranchUpgrade)
		setSelectedBranchUpgradeAction(() => (id) => ChangeTreeBranchUpgrade(gameManager.DogManager, id))
		
	}

	return(<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					<StoreItemButton ItemName={"Tree"} onClick={onTreeSelected}/>
					<StoreItemButton ItemName={"Bees"}/>
					<StoreItemButton ItemName={"Dog"} onClick={onDogSelected}/>
					<StoreItemButton ItemName={"Bird"}/>
				</div>
				<UtilityStoreLateralContent 
					Name={selectedName}
					Level={selectedLevel}
					Description={selectedDescription}

					UpgradeText1={selectedUpgradeText1} 
					UpgradeValue1={selectedUpgradeValue1} 
					UpgradeNextValue1={selectedUpgradeNextValue1} 

					UpgradeText2={selectedUpgradeText2} 
					UpgradeValue2={selectedUpgradeValue2} 
					UpgradeNextValue2={selectedUpgradeNextValue2}
					UpgradePrice={selectedUpgradePrice}
					UpgradeAction={selectUpgradeAction}

					BranchUpgrade={selectedBranchUpgrade}
					BranchUpgradeAction={selectedBranchUpgradeAction}
				/>
			</div>
	)
}