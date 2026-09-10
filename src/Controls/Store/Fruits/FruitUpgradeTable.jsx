import {ConvertMoneyNumber} from '../../../Script/Shareds/Functions/NumberConverter'

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
					<td className={'StoreContentStatusTableContent'}>{ConvertMoneyNumber(props.NextSelectedUpgradePrice)}</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<th className={'StoreContentStatusTableContent'}><b>Spawn Timer</b></th>
					<td className={'StoreContentStatusTableContent'}>{ConvertMoneyNumber(props.SpawnTimer)}s</td>
					<td className={'StoreContentStatusTableContent'}>{ConvertMoneyNumber(props.NextSelectedSpawnTimer)}s</td>
				</tr>
			</tbody>
		</table>
	</div>
}
