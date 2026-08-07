export default function FlowerUpgradeTable(props) 
{
	return <div className={'StoreContentStatus'}>
		<table className={'StoreContentStatusTable'}>
			<thead>
				<tr>
					<th></th>
					<th className={'StoreContentStatusTableContent'}>Current Level</th>
					<th className={'StoreContentStatusTableContent'}>Next Level</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>Money Per Second</b></th>
					<td className={'StoreContentStatusTableContent'}>{props.MoneyPerSecond}s</td>
					<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
				</tr>
			</tbody>
		</table>
	</div>
}
