import { useEffect, useState } from "react";
import { gameManager } from "../../../App";
import './Style/Shop.css'

export default function ShopContainerBase() 
{
	var [selectedOption, setSelectedOption] = useState('')
	var [seedSwapButtons, setSeedSwapButtons] = useState('')
	var [ItensButtons, setItensButtons] = useState('')
	var [SpecialItensButtons, setSpecialItensButtons] = useState('')

	function onButtonSelected(fruitSpawner, fruitStatesDTO)
	{
	}
	
	useEffect(() => {

		if(!gameManager)
			return;

		setSeedSwapButtons(gameManager.ItemManager.SeedSwap.map((x, i) => <ShopButton Item={x} key={i}/>))
		setItensButtons(gameManager.ItemManager.ItemShop.map((x, i) => <ShopButton Item={x} key={i}/>))
		setSpecialItensButtons(gameManager.ItemManager.SpecialItens.map((x, i) => <ShopButton Item={x} key={i}/>))

	}, []);

	return(<div className={'ControlContent'}>
				<div className={'FruitStoreButtonsContainer'}>
					<Divider/>
					<div className={"GridContainer"}>
						{seedSwapButtons}

					</div>
					<Divider/>
					<div className={"GridContainer"}>
						{ItensButtons}

					</div>
					<Divider/>
					<div className={"GridContainer"}>
						{SpecialItensButtons}

					</div>
				</div>
				<ShopContainer/>
			</div>
	)
}


export function ShopContainer(props) 
{

	function upgradeFruit()
	{
	}

	return (
		<div className={'StoreLateralContents'}>
			<div className={'StoreContentName'}>nome</div>
			<div className={'StoreContentDescritpion'}>sss</div>
	
			<div>
				<div onClick={upgradeFruit} className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>preco</div>
			</div>
		</div>
	)
}

export function ShopButton(props) 
{


	return (
	<div  className={'ShopItemButton'}>
		<div className="crop-box">
  			{/* <img src={`/assets/Fruits/${props.fruitSpawner.FruitName}.png`} style={{ imageRendering: 'pixelated', position: 'absolute', top: sy, left: sx}} /> */}
		</div>
			<div style={{textAlign:'center', fontSize:'x-large'}}>{props.Item.Name}</div>
	</div>
	)
}

export function Divider()
{
	
	return(<div className={'ShopDivider'}>
				Teste
			</div>
	)
}