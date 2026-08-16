import Swal from 'sweetalert2';
import { gameManager } from '../../../App';

export default function PrestigeBaseContent({visible}) {

	function onPrestigeClick()
	{
		
		Swal.fire({
					title: 'Do you wanna prestige?',
					icon: "question",
					html: '<div class="PopupSubContainer">All upgrades, branch upgrade, flowers and fruits you have currently will be gone, but you are gonna have the buffs given in the prestige</div>',
					confirmButtonText: 'Yes',
					background:'var(--container)',
					color: 'var(--text-white)',
					confirmButtonColor: 'var(--button-background-color)',
					cancelButtonText: 'No',
  					showCancelButton: true,
				  }).then((result) => {
  					if (result.isConfirmed) 
						gameManager.PrestigeManager.ResetGame()
					});
	}
	
	return (
	<div>
		<div className={'TabButton'} onClick={() => onPrestigeClick()}>Do the prestige</div>
	</div>
  )
}