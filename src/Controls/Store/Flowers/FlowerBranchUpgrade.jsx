
export default function FlowerBranchUpgrade(props) {

	function upgrade(id)
	{
		var flower = gameManager.flowerManager.Flowers.find((x) => x.Id == props.FlowerId);

		flower.UpdateBranchUpgrade(id)
		props.onBranchUpgrade(flower.Id)
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
