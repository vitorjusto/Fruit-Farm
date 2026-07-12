
import './Hud.css'
import moneyIcon from '../../assets/Money.png'
import StoreBaseContent from '../Store/StoreBaseContent'
import {useState} from 'react'

export default function Hud() {


	var [isOpen, setIsOpenShop] = useState(true)

	function onStoreButtonClick()
	{
		setIsOpenShop(!isOpen)
	}

  return (
	<>
		<div className="HudBase">
			<div className="HudContainer HudMoneyContainer">
  				<img src={moneyIcon} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
				<p>$aaa</p>
			</div>
			<div className="HudContainer HudButtonsContainer">
				<button onClick={onStoreButtonClick}>
  					<img src={moneyIcon} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
				</button>
			</div>
			
		</div>
		<StoreBaseContent visible = {isOpen}/>
	</>
  )
}