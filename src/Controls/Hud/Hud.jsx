
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
import Swal from 'sweetalert2';

import { gameManager } from '../../App'

export default function Hud({money, greenSeed, orangeSeed, blueSeed, pinkSeed, goldSeed, rareSeed}) {


	var [isOpen, setIsOpenShop] = useState(false)

	function onStoreButtonClick()
	{
		setIsOpenShop(!isOpen)
	}

	function onMissionClick()
	{
		// Swal.fire({
		//   title: 'Meu Alerta',
		//   html: `
		//     <p>Escolha uma opção:</p>
		//     <button id="meuBotao" class="swal2-confirm swal2-styled">
		//       Clique aqui
		//     </button>
		//   `,
		//   showConfirmButton: false, // esconde o botão padrão, se quiser
		//   
		// });

		Swal.fire({
					title: 'Current Missions',
					icon: "info",
					html: gameManager.MissionManager.GetMissionHtml(),
					confirmButtonText: 'Ok',
					background:'var(--container)',
					color: 'var(--text-white)',
					confirmButtonColor: 'var(--button-background-color)',
					didOpen: () => {
		  				  var button = document.getElementById('button1')
						  
						  if(button)
							button.addEventListener('click', () => {gameManager.MissionManager.ClaimReward(1); onMissionClick()});

		  				  button = document.getElementById('button2')
						  
						  if(button)
							button.addEventListener('click', () => {gameManager.MissionManager.ClaimReward(2); onMissionClick()});

		  				  button = document.getElementById('button3')
						  
						  if(button)
							button.addEventListener('click', () => {gameManager.MissionManager.ClaimReward(3); onMissionClick()});
		  				}
				  });
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
						<p className='MoneySecondsPanel'>{greenSeed}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={OrangeSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{orangeSeed}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={GoldSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{goldSeed}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={BlueSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{blueSeed}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={PinkSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{pinkSeed}</p>
					</div>
					<div className='SmallCurrencyPanel CurrencyContainerValue'>
						<img src={RareSeed} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
						<p className='MoneySecondsPanel'>{rareSeed}</p>
					</div>
				</div>
			</div>
			<div className="HudContainer HudButtonsContainer">
				<div>
					<button className="ButtonMenu" onClick={onMissionClick}>
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