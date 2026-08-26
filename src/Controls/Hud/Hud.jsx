
import './Hud.css'
import moneyIcon from '/assets/Money.png'
import MenuIcon from '/assets/MenuIcon.png'
import MissionIcon from '/assets/MissionIcon.png'

import BlueSeed from '/assets/Seeds/BlueSeed.png'
import GoldSeed from '/assets/Seeds/GoldSeed.png'
import GreenSeed from '/assets/Seeds/GreenSeed.png'
import OrangeSeed from '/assets/Seeds/OrangeSeed.png'
import PinkSeed from '/assets/Seeds/PinkSeed.png'
import RareSeed from '/assets/Seeds/RareSeed.png'

import StoreBaseContent from '../Store/StoreBaseContent'
import {useState} from 'react'

export default function Hud({money}) {


	var [isOpen, setIsOpenShop] = useState(false)

	function onStoreButtonClick()
	{
		setIsOpenShop(!isOpen)
	}

  return (
	<>
		<div className="HudBase">
			<div className="HudContainer HudMoneyContainer">
				<div className="CurrencyContainer">
					<img src={moneyIcon} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
					<div className='CurrencyPanelBase'>
						<div className='CurrencyPanel CurrencyContainerValue'>
							<div></div><p className='MoneyPanel'>{money}</p>
						</div>
						<div className='SmallCurrencyPanel CurrencyContainerValue'>
							<div></div><p className='MoneySecondsPanel'>{money}</p>
						</div>
					</div>
				</div>
				<div className='SeedContainer'>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={GreenSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={OrangeSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={GoldSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={BlueSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={PinkSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={RareSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{money}</p>
					</div>
				</div>
			</div>
			<div className="HudContainer HudButtonsContainer">
				<div>
					<button className="ButtonMenu" onClick={onStoreButtonClick}>
  						<img src={MissionIcon} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
					</button>
					<button className="ButtonMenu" onClick={onStoreButtonClick}>
  						<img src={MenuIcon} width={64} height={64} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
					</button>
				</div>
			</div>
			
		</div>
		<StoreBaseContent visible = {isOpen}/>
	</>
  )
}