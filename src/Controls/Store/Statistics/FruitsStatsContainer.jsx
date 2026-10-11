import { useEffect } from 'react'
import './Styles/Statistics.css'
import { gameManager } from '../../../App'
import Swal from 'sweetalert2';

export default function GaleryContainer() 
{
	return(<div>
				<div className={'GaleryStoreButtonsBase'}>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
					<GaleryButtonContainer/>
				</div>
			</div>
	)
}

export function GaleryButtonContainer()
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

	return(<div onClick={onClick} className={'GalleryButton'}>
				<div className="crop-box">
  					<img src={`/assets/Fruits/Apple.png`} style={{ imageRendering: 'pixelated', position: 'absolute', top: -64, left: -160}} />
				</div>
			</div>
	)

}