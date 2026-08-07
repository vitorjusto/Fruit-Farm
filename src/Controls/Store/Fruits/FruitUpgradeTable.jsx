export default function UpgradeTable(props) 
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
					<th className={'StoreContentStatusTableContent'}><b>Selling Price</b></th>
					<td className={'StoreContentStatusTableContent'}>{props.SellingPrice}</td>
					<td className={'StoreContentStatusTableContent'}>0,00 (+0.02)</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>Spawn Time</b></th>
					<td className={'StoreContentStatusTableContent'}>{props.SpawnTimer}</td>
					<td className={'StoreContentStatusTableContent'}>0 min (+0.02)</td>
				</tr>
			</tbody>
		</table>
	</div>
}