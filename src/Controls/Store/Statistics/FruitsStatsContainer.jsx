import { useEffect, useState } from 'react'
import './Styles/Statistics.css'
import { gameManager } from '../../../App'
import Swal from 'sweetalert2';
import { GetFruitNameById } from '../../../Script/Fruits/Factories/FruitFactory';
import { GetBranchUpgradePath } from '../../../Script/Statistics/Entities/FruitsStats';

var maxFruitId = 54;
var maxBranchID = 40

class dto
{
	constructor(name, branchId)
	{
		this.Name = name;
		this.BranchId = branchId
	}
}

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
					controls.push(new dto(fruit.FruitName, fruit.BranchUpgradeId))
				else
					controls.push(new dto("UnknownFruit", 1))
			}
		}

		setContents(controls.map((fruit, i) => <GaleryButtonContainer key={i} fruitName={fruit.Name} branchUpgradeId={fruit.BranchId}/>))
		
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
		Swal.fire({
					title: 'Do you wanna prestige?',
					icon: "info",
					html: '<div class="PopupSubContainer">All upgrades, branch upgrade, flowers and fruits you have currently will be gone, but you are gonna have the buffs given in the prestige</div>',
					confirmButtonText: 'Ok',
					background:'var(--container)',
					color: 'var(--text-white)',
					confirmButtonColor: 'var(--button-background-color)',
				  });
	}

	var sx = Math.floor((props.branchUpgradeId - 1)% 6) * -32
	var sy = Math.floor((props.branchUpgradeId - 1)/ 6) * -32

	var fruitName = `/assets/Fruits/${props.fruitName}.png`
	
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