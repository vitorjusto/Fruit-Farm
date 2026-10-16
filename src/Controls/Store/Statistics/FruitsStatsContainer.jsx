import { useEffect, useState } from 'react'
import './Styles/Statistics.css'
import { gameManager } from '../../../App'
import Swal from 'sweetalert2';
import { GetFruitNameById } from '../../../Script/Fruits/Factories/FruitFactory';
import { GetBranchUpgradePath } from '../../../Script/Statistics/Entities/FruitsStats';
import { SingularFruitStat } from '../../../Script/Statistics/Entities/FruitsStats';
import { ConvertMoneyNumber } from '../../../Script/Shareds/Functions/NumberConverter';

var maxFruitId = 54;
var maxBranchID = 40

export default function GaleryContainer() 
{
	const [contents, setContents] = useState([])

	useEffect(() => {
		if(!gameManager)
			return;
		
		var fruitStats = gameManager.StatisticsManager.FruitsStats
		var controls = []
		for (let fruitId = 1; fruitId <= maxFruitId; fruitId++) 
		{
			for (let branchId = 1; branchId <= maxBranchID; branchId++)
			{
				var fruit = fruitStats.FindFruit(GetFruitNameById(fruitId), branchId)

				if(fruit)
					controls.push(fruit)
				else
					controls.push(new SingularFruitStat("UnknownFruit", "",1))
			}
		}

		setContents(controls.map((fruit, i) => <GaleryButtonContainer key={i} fruitStat={fruit}/>))
		
	}, []);

	return(<div>
				<div className={'GaleryStoreButtonsBase StatisticsBaseContainer'}>
					{contents}
				</div>
			</div>
	)
}

export function GaleryButtonContainer(props)
{
	function onClick()
	{
		if(props.fruitStat.FruitName == "UnknownFruit")
		{
			Swal.fire({
						title: 'Unknown Fruit',
						html: '<div class="PopupSubContainer">???</div>',
						confirmButtonText: 'Ok',
						background:'var(--container)',
						color: 'var(--text-white)',
						confirmButtonColor: 'var(--button-background-color)',
					  });

		}else
		{
			Swal.fire({
						title: props.fruitStat.FruitName,
						html: `<table class="StoreContentStatusTable">
									<thead>
										<tr>
											<th class="StoreContentStatusTableContent">Total Fruit Collected</th>
											<th class="StoreContentStatusTableContent">Total Money Collected</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="StoreContentStatusTableContent">${ConvertMoneyNumber(props.fruitStat.FruitCollected)}</td>
											<td class="StoreContentStatusTableContent">${ConvertMoneyNumber(props.fruitStat.MoneyMade)}</td>
										</tr>
									</tbody>
								</table>
								<br/>
								<div class="PopupSubContainer">${props.fruitStat.BranchUpgradePath}</div>`,
						confirmButtonText: 'Ok',
						background:'var(--container)',
						color: 'var(--text-white)',
						confirmButtonColor: 'var(--button-background-color)',
					  });

		}
	}

	var sx = Math.floor((props.fruitStat.BranchUpgradeId - 1)% 6) * -32
	var sy = Math.floor((props.fruitStat.BranchUpgradeId - 1)/ 6) * -32

	var fruitName = `/assets/Fruits/${props.fruitStat.FruitName}.png`
	
	var style = { 
					imageRendering: 'pixelated', 
					position: 'absolute', 
					top: sy, 
					left: sx
				}

	return(<div onClick={onClick} className={'GalleryButton'}>
				<div className="crop-box">
  					<img src={fruitName} style={style} />
				</div>
			</div>
	)

}