import { useEffect, useState } from "react";
import { gameManager } from "../../../App";
import './Style/Shop.css'
import Swal from "sweetalert2";
import { EShopCurrency } from "../../../Script/Shop/Enums/EShopCurrency";

export default function ShopContainerBase() 
{
	var [seedSwapButtons, setSeedSwapButtons] = useState('')
	var [ItensButtons, setItensButtons] = useState('')
	var [SpecialItensButtons, setSpecialItensButtons] = useState('')

	var [SelectedName, setSelectedName] = useState('')
	var [SelectedDescription, setSelectedDescription] = useState('')
	var [SelectedPrice, setSelectedPrice] = useState('')
	var [ItemSelected, setItemSelected] = useState(null)
	
	function onButtonSelected(x)
	{
		setSelectedName(x.Name)
		setSelectedDescription(x.Description)
		setSelectedPrice(x.Price)
		setItemSelected(x)

	}

	function onBuy(qtde)
	{
		if(VerifyPrice(qtde))
		{
			Swal.fire({
				title: 'Do you wanna Buy it?',
				icon: "question",
				html: '',
				confirmButtonText: 'Yes',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				cancelButtonText: 'No',
				showCancelButton: true,
			  }).then((result) => {
				if (result.isConfirmed) 
					ItemSelected.OnTrade(qtde)
				});

		}else
		{
			Swal.fire({
				title: 'Not Enough Seeds',
				icon: "error",
				confirmButtonText: 'OK',
				background:'var(--container)',
				color: 'var(--text-white)',
				confirmButtonColor: 'var(--button-background-color)',
				showCancelButton: false,
			  })
		}


	}

	function VerifyPrice(qtde)
	{
		console.log(qtde)
		console.log(ItemSelected.Currency)
		if(ItemSelected.Currency == EShopCurrency.greenSeed)
			return gameManager.seedManager.greenSeed >= (ItemSelected.Price * qtde);
		if(ItemSelected.Currency == EShopCurrency.blueSeed)
			return gameManager.seedManager.blueSeed >= (ItemSelected.Price * qtde);
		if(ItemSelected.Currency == EShopCurrency.orangeSeed)
			return gameManager.seedManager.orangeSeed >= (ItemSelected.Price * qtde);
		if(ItemSelected.Currency == EShopCurrency.pinkSeed)
			return gameManager.seedManager.pinkSeed >= (ItemSelected.Price * qtde);
		if(ItemSelected.Currency == EShopCurrency.goldSeed)
			return gameManager.seedManager.goldSeed >= (ItemSelected.Price * qtde);
		if(ItemSelected.Currency == EShopCurrency.rareSeed)
			return gameManager.seedManager.rareSeed >= (ItemSelected.Price * qtde);
		
		return false;
	}


	useEffect(() => {

		if(!gameManager)
			return;

		setSeedSwapButtons(gameManager.ItemManager.SeedSwap.map((x, i) => <ShopButton onClick={() => onButtonSelected(x)} Item={x} key={i}/>))
		setItensButtons(gameManager.ItemManager.ItemShop.map((x, i) => <ShopButton onClick={() => onButtonSelected(x)} Item={x} key={i}/>))
		setSpecialItensButtons(gameManager.ItemManager.SpecialItens.map((x, i) => <ShopButton onClick={() => onButtonSelected(x)} Item={x} key={i}/>))

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
				<ShopContainer
					SelectedName={SelectedName}
					SelectedDescription={SelectedDescription}
					SelectedPrice={SelectedPrice}
					onButtonClick={(qtde) => onBuy(qtde)}
				/>
			</div>
	)
}


export function ShopContainer(props) 
{
	var [SelectedQuantity, setSelectedQuantity] = useState(1)

	return (
		<div className={'ShopLateralContents'}>
			<div className={'StoreContentName'}>{props.SelectedName}</div>
			<div className={'StoreContentDescritpion'}>{props.SelectedDescription}</div>
			<div className={'StoreSelectedQuantity'}>{SelectedQuantity}</div>
			<div className={'QuantiyContainer'}>
				<div className={'QuantityButton'} onClick={() => setSelectedQuantity((SelectedQuantity - 1) == 0?1:(SelectedQuantity - 1))}>-</div>
				<input type={'range'} value={SelectedQuantity} onInput={(e) => {
					setSelectedQuantity(Number(e.target.value))
				}} min={1} max={99} className={'QuantityRange'}/>
				<div onClick={() => setSelectedQuantity((SelectedQuantity + 1) == 100?99:(SelectedQuantity + 1))} className={'QuantityButton'}>+</div>
			</div>
			<div>
				<div onClick={() => props.onButtonClick(SelectedQuantity)} className={'ShopBuyButton'} style={{margin: '20px auto'}}>
					<div><img src={'/assets/Seeds/BlueSeed.png'} style={{ imageRendering: 'pixelated', position: 'absolute', scale: '2'}} /></div>
					<div>{props.SelectedPrice * SelectedQuantity}</div>
				</div>
			</div>
		</div>
	)
}

export function ShopButton(props) 
{


	return (
	<div onClick={() => props.onClick()} className={'ShopItemButton'}>
		<div className="crop-box">
  			<img src={props.Item.ShopImagePath} style={{ imageRendering: 'pixelated', position: 'absolute'}} />
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