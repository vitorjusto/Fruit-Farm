import { useState } from 'react'
import FruitsStoreContainer from './Fruits/FruitsStoreContainer'
import UtilityStoreBaseContainer from './Utility/UtilityStoreBaseContainer'
import StatisticsStoreBaseContainer from './Statistics/StatisticsStoreBaseContainer'
import './Styles/StoreBaseContent.css'
import FlowersStoreBaseContainer from './Flowers/FlowersStoreBaseContainer'

export default function StoreBaseContent({visible}) {

	var [storeContainer, setStoreContainer] = useState((<FruitsStoreContainer/>))

  	return (
	<div style={{display: (visible? 'inline' :'none')}}>
		<div className={'BaseControl'}>
			<div className={'TabControl'} >
				<div className={'TabButton'} onClick={() => setStoreContainer(<FruitsStoreContainer/>)}>Fruits</div>
				<div className={'TabButton'} onClick={() => setStoreContainer(<FlowersStoreBaseContainer/>)}>Flowers</div>
				<div className={'TabButton'} onClick={() => setStoreContainer(<UtilityStoreBaseContainer/>)}>Utility</div>
				<div className={'TabButton'} onClick={() => setStoreContainer(<StatisticsStoreBaseContainer/>)}>Statistics</div>
			</div>
			{storeContainer}
		</div>
		
	</div>
  )
}

