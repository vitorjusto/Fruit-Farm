import Swal from 'sweetalert2';

export default function AchivmentsContainer()
{
	function onClick()
	{
		Swal.fire({
				    title: 'You Did Something',
				    html: '<div class="PopupSubContainer">you </div><div class="PopupSubContainerAchivment"><div class="PopupSubContainerSmall">you did this </div><div class="PopupSubContainerSmall">date </div></div>',
				    confirmButtonText: 'Close',
					background:'var(--container)',
					color: 'var(--text-white)',
					confirmButtonColor: 'var(--button-background-color)',
					
				  });
	}

	return(
		<div>
			<div className="StatisticsContainer statisticsContainerOdd" onClick={onClick}>
				<div>Total Fruits sell</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Money per seconds</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Tree Size</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Total Fruits Upgrades</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerOdd">
				<div>Prestige Made</div>
				<div>20</div>
			</div>
			<div className="StatisticsContainer statisticsContainerEven">
				<div>Tree Size</div>
				<div>20</div>
			</div>
		</div>
	)
}