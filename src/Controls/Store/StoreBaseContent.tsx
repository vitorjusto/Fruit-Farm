import './StoreBaseContent.css'
import moneyIcon from '../../assets/Money.png'

export default function StoreBaseContent({visible}) {

  return (
	<div style={{display: (visible? 'inline' :'none')}}>
		<div className={'BaseControl'}>
			<div className={'TabControl'} >
				<div className={'TabButton'}>Fruits</div>
				<div className={'TabButton'}>Flower</div>
				<div className={'TabButton'}>Utility</div>
			</div>
			<div className={'ControlContent'}>
				<div className={'StoreButtonsBase'}>
					<StoreFruitButton/>
					<StoreFruitButton/>
					<StoreFruitButton/>
					<StoreFruitButton/>
					<StoreFruitButton/>
				</div>
				<StoreFruitLateralContent/>
			</div>
		</div>
	</div>
  )
}

export function StoreFruitButton() {

  return (
	<div className={'StoreFruitButton'}>
		<img src={moneyIcon} width={32} height={32} alt="Descrição da imagem" style={{ imageRendering: 'pixelated' }}  />
		<div style={{textAlign:'center', fontSize:'xx-large'}}>Fruit</div>
		<div>Price: 00</div>
		<div>Price: 00</div>
	</div>
  )
}

export function StoreFruitLateralContent() {

  return (
	<div className={'StoreLateralContents'}>
		<div className={'StoreContentName'}>Apple</div>
		<div className={'StoreContentLevel'}>Level</div>
		<div className={'StoreContentDescritpion'}>Description</div>
		<div>
			<div className={'StoreContentBranchUpgrade'} style={{height: '100%', display: 'none'}}>
				<div className={'StoreContentUpgradeDescription'}>Description</div>
				<div className={'StoreContentUpgradeButtonContainer'}>
					<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
					<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
					<div className={'StoreUpgradeButton BranchUpgradeButton'}>aa</div>
				</div>
			</div>

		</div>
		<div className={'StoreContentStatus'}>
			<table className={'StoreContentStatusTable'}>
				<tr>
					<th></th>
					<th className={'StoreContentStatusTableContent'}>Current Level</th>
					<th className={'StoreContentStatusTableContent'}>Next Level</th>
				</tr>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>Selling Price</b></th>
					<td className={'StoreContentStatusTableContent'}>0,00</td>
					<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
				</tr>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>Spawn Time</b></th>
					<td className={'StoreContentStatusTableContent'}>0 min</td>
					<td className={'StoreContentStatusTableContent'}>0 min (+0.02)</td>
				</tr>
			</table>
		</div>
		<div>
			<div className={'StoreUpgradeButton'} style={{margin: '20px auto'}}>aa</div>
		</div>
	</div>
  )
}