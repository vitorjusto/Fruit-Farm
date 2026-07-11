import { useEffect, useRef } from "react";
import GameManager from "../Script/Managers/GameManager"

export default function GameContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameManager | null>(null);

  useEffect(() => {

		const canvas = canvasRef.current;
		if (!canvas) return;

		const game = new GameManager(canvas);
		gameRef.current = game;
		game.start();

		return () => game.stop();
  }, []);

  return <canvas ref={canvasRef} id="game" width={1200} height={600} />;
}