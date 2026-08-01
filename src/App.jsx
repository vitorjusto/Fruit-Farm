import { useState, useEffect, useRef } from 'react'
import Hud from './Controls/Hud/Hud'
import GameManager from "./Script/Managers/GameManager"

function App() {

	var [money, setMoney] = useState(0);
	const canvasRef = useRef(null);
	const gameRef = useRef(null);

  	useEffect(() => {

		const c = canvasRef.current;
		if (!c) return;

		canvas = c
		gameManager = new GameManager(canvas, money, setMoney);
		gameRef.current = gameManager;
		gameManager.start();

		return () => gameManager.stop();
  	}, []);

  	function onUserClick()
  	{
		gameManager.HarvestFruits()
  	}

  return (
	<>
		<Hud money={money}/>
		<canvas ref={canvasRef} id="game" width={1200} height={600} onClick={onUserClick} />
	</>
  )
}

export let gameManager;
export let canvas;

export default App