import { useState, useEffect, useRef } from 'react'
import Hud from './Controls/Hud/Hud'
import GameManager from "./Script/Managers/GameManager"
import SeedManager from "./Script/Managers/SeedManager"

function App() {

	var [money, setMoney] = useState(0);

	var [greenSeed, setGreenSeed] = useState(0);
	var [orangeSeed, setOrangeSeed] = useState(0);
	var [blueSeed, setBlueSeed] = useState(0);
	var [pinkSeed, setPinkSeed] = useState(0);
	var [goldSeed, setGoldSeed] = useState(0);
	var [rareSeed, setRareSeed] = useState(0);

	const canvasRef = useRef(null);
	const gameRef = useRef(null);

  	useEffect(() => {

		const c = canvasRef.current;
		if (!c) return;

		canvas = c
		gameManager = new GameManager(canvas, money, setMoney);
		gameManager.seedManager = new SeedManager(setGreenSeed,
												  setOrangeSeed,
												  setBlueSeed,
												  setPinkSeed,
												  setGoldSeed,
												  setRareSeed);
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
		<Hud money={money}
			 greenSeed={greenSeed} 
			 orangeSeed={orangeSeed}
			 blueSeed={blueSeed}
			 pinkSeed={pinkSeed}
			 goldSeed={goldSeed}
			 rareSeed={rareSeed}
			 setGreenSeed={setGreenSeed}
			 setOrangeSeed={setOrangeSeed}
			 setBlueSeed={setBlueSeed}
			 setPinkSeed={setPinkSeed}
			 setGoldSeed={setGoldSeed}
			 setRareSeed={setRareSeed}/>
		<canvas ref={canvasRef} id="game" width={1200} height={600} onClick={onUserClick} />
	</>
  )
}

export let gameManager;
export let canvas;

export default App