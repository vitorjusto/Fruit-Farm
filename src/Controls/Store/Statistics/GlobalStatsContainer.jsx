import './Styles/Statistics.css'
import {useState, useEffect} from 'react'
import { gameManager } from '../../../App'
import { ConvertMoneyNumber } from '../../../Script/Shareds/Functions/NumberConverter'

export default function GlobalStatsContainer()
{
	
	const[TotalFruitsSold, SetTotalFruitsSold] = useState(0)
	const[TotalMoneyGetByFruits, SetTotalMoneyGetByFruits] = useState(0)
	const[TotalFruitsUpgrades, SetTotalFruitsUpgrades] = useState(0)
	const[TotalFruitsBranchUpgrades, SetTotalFruitsBranchUpgrades] = useState(0)

	const[TotalMoneyGetByFlowers, SetTotalMoneyGetByFlowers] = useState(0)
	const[MaxMoneyPerSeconds, SetMaxMoneyPerSeconds] = useState(0)
	const[FlowersPurshased, SetFlowersPurshased] = useState(0)
	const[FlowersSold, SetFlowersSold] = useState(0)
	const[TotalFlowersUpgrades, SetTotalFlowersUpgrades] = useState(0)
	const[TotalFlowersBranchUpgrades, SetTotalFlowersBranchUpgrades] = useState(0)

	const[TotalTreeUpgrades, SetTotalTreeUpgrades] = useState(0)
	const[TotalTreeBranchUpgrades, SetTotalTreeBranchUpgrades] = useState(0)

	const[FruitsCollectedByBees, SetFruitsCollectedByBees] = useState(0) 
	const[MoneyCollectedByBees, SetMoneyCollectedByBees] = useState(0)
	const[TotalBeesUpgrades, SetTotalBeesUpgrades] = useState(0) 
	const[TotalBeesBranchUpgrades, SetTotalBeesBranchUpgrades] = useState(0)

	const[AmountofTimeDogWasPet, SetAmountofTimeDogWasPet] = useState(0)
	const[MoneyGetByDog, SetMoneyGetByDog] = useState(0)
	const[TotalDogUpgrades, SetTotalDogUpgrades] = useState(0)
	const[TotalDogBranchUpgrades, SetTotalDogBranchUpgrades] = useState(0)

	const[TotalBirdsTakenDown, SetTotalBirdsTakenDown] = useState(0)
	const[TotalBirdsUpgrades, SetTotalBirdsUpgrades] = useState(0) 
	const[TotalBirdsBranchUpgrades, SetTotalBirdsBranchUpgrades] = useState(0)

	const[PrestigeMade, SetPrestigeMade] = useState(0) 
	const[MissionsAccomplished, SetMissionsAccomplished] = useState(0)

	
	useEffect(() => {

		var animation = setInterval(() => {
			SetTotalFruitsSold(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalFruitsSold))
			SetTotalMoneyGetByFruits(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalMoneyGetByFruits))
			SetTotalFruitsUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalFruitsUpgrades))
			SetTotalFruitsBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalFruitsBranchUpgrades))
		
			SetTotalMoneyGetByFlowers(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalMoneyGetByFlowers))
			SetMaxMoneyPerSeconds(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.MaxMoneyPerSeconds) + '/s')
			SetFlowersPurshased(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.FlowersPurshased))
			SetFlowersSold(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.FlowersSold))
			SetTotalFlowersUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalFlowersUpgrades))
			SetTotalFlowersBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalFlowersBranchUpgrades))

			SetTotalTreeUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalTreeUpgrades))
			SetTotalTreeBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalTreeBranchUpgrades))

			SetFruitsCollectedByBees(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.FruitsCollectedByBees))
			SetMoneyCollectedByBees(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.MoneyCollectedByBees))
			SetTotalBeesUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalBeesUpgrades))
			SetTotalBeesBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalBeesBranchUpgrades))
			
			SetAmountofTimeDogWasPet(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.AmountofTimeDogWasPet))
			SetMoneyGetByDog(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.MoneyGetByDog))
			SetTotalDogUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalDogUpgrades))
			SetTotalDogBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalDogBranchUpgrades))

			SetTotalBirdsTakenDown(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalBirdsTakenDown))
			SetTotalBirdsUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalBirdsUpgrades))
			SetTotalBirdsBranchUpgrades(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.TotalBirdsBranchUpgrades))

			SetPrestigeMade(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.PrestigeMade))
			SetMissionsAccomplished(ConvertMoneyNumber(gameManager.StatisticsManager.GlobalStats.MissionsAccomplished))
		}, 10)

	}, []);

	return(
		<div className="StatisticsBaseContainer">
			<Statistic styleType='Odd'  Text='Total Fruit Sold' 					  		   Value={TotalFruitsSold}/>
			<Statistic styleType='Even' Text='Total money get by fruits' 			  		   Value={TotalMoneyGetByFruits}/>
			<Statistic styleType='Odd'  Text='Total Fruits Upgrades' 				  		   Value={TotalFruitsUpgrades}/>
			<Statistic styleType='Even' Text='Total Fruits Branch Upgrades' 		  		   Value={TotalFruitsBranchUpgrades}/>
		   
			<Statistic styleType='Odd'  Text='Total money get by flowers' 			  		   Value={TotalMoneyGetByFlowers}/>
			<Statistic styleType='Even' Text='Max money per seconds given by flowers' 		   Value={MaxMoneyPerSeconds}/>
			<Statistic styleType='Odd'  Text='Flowers Purchased' 					  		   Value={FlowersPurshased}/>
			<Statistic styleType='Even' Text='Flowers sold' 						  		   Value={FlowersSold}/>
			<Statistic styleType='Odd'  Text='Total flowers upgrades' 				  		   Value={TotalFlowersUpgrades}/>
			<Statistic styleType='Even' Text='Total flowers branch upgrades' 		  		   Value={TotalFlowersBranchUpgrades}/>
		   
			<Statistic styleType='Odd'  Text='Total tree upgrades' 					  		   Value={TotalTreeUpgrades}/>
			<Statistic styleType='Even' Text='Total tree branch upgrades' 			  		   Value={TotalTreeBranchUpgrades}/>
		   
			<Statistic styleType='Odd'  Text='Fruits collected by bees' 			  		   Value={FruitsCollectedByBees}/>
			<Statistic styleType='Even' Text='Money collected by bees when player was outside' Value={MoneyCollectedByBees}/>
			<Statistic styleType='Odd'  Text='Total bees upgrated' 					  		   Value={TotalBeesUpgrades}/>
			<Statistic styleType='Even' Text='Total bees Branch upgrated' 			  		   Value={TotalBeesBranchUpgrades}/>
						
			<Statistic styleType='Odd'  Text='Amount of time dog was pet' 			  		   Value={AmountofTimeDogWasPet}/>
			<Statistic styleType='Even' Text='Money get by dog' 					  		   Value={MoneyGetByDog}/>
			<Statistic styleType='Odd'  Text='Total dog upgrades' 					  		   Value={TotalDogUpgrades}/>
			<Statistic styleType='Even' Text='Total dog branch upgrades' 			  		   Value={TotalDogBranchUpgrades}/>
						
			<Statistic styleType='Odd'  Text='Total birds taken down' 				  		   Value={TotalBirdsTakenDown}/>
			<Statistic styleType='Even' Text='Total bird upgrades' 					  		   Value={TotalBirdsUpgrades}/>
			<Statistic styleType='Odd'  Text='Total bird Branch upgrades' 			  		   Value={TotalBirdsBranchUpgrades}/>
						
			<Statistic styleType='Even' Text='Prestige made' 						  		   Value={PrestigeMade}/>
			<Statistic styleType='Odd'  Text='Missions accomplished' 				  		   Value={MissionsAccomplished}/>

		</div>
	)
}

function Statistic(props)
{
	return(<div className={`StatisticsContainer statisticsContainer${props.styleType}`}>
		<div>{props.Text}</div>
		<div>{props.Value}</div>
	</div>)
	
}