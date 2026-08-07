
export default function FruitBranchUpgrade(props) {

	function upgrade(id)
	{
		let fruitSpawner = gameManager.fruitManager.FruitsSpawners.find((value, index) => value.FruitId == props.fruitId)

		fruitSpawner.UpdateBranchUpgrade(id)

		props.SelectedFruitStatesDTO.setSellingPrice(fruitSpawner.SellingPrice)
		props.SelectedFruitStatesDTO.setMaxSpawnCooldown(fruitSpawner.MaxSpawnCooldown)
		
		props.onUpgradeClick(fruitSpawner, props.SelectedFruitStatesDTO)

	}

	return <div>
		<div className={'StoreContentBranchUpgrade'} style={{ height: '100%', display: props.AvaliableBranchUpgrade?'inline':'none'}}>
			<div className={'StoreContentUpgradeDescription'}>Description</div>
			<div className={'StoreContentUpgradeButtonContainer'}>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade1.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade1.Name : ""}</div>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade2.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade2.Name : ""}</div>
				<div onClick={() => upgrade(props.AvaliableBranchUpgrade.Upgrade3.BranchUpgradeId)} className={'StoreUpgradeButton BranchUpgradeButton'}>{props.AvaliableBranchUpgrade? props.AvaliableBranchUpgrade.Upgrade3.Name : ""}</div>
			</div>
		</div>

	</div>
}