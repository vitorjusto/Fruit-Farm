import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import GameContent from './Controls/GameContent'
import Hud from './Controls/Hud/Hud'

function App() {

	var [money, setMoney] = useState(0)
  return (
	<>
		<Hud money={money}/>
		<GameContent money={money} setMoney={setMoney}/>
	</>
  )
}

export default App
