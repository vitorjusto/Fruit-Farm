import BackgroundManager from './BackgroundManager'
import FruitManager from './FruitManager'

export default class GameManager
{
	context;
	canvas;

	skyManager;
	fruitManager;

	constructor(canvas)
	{
		this.canvas = canvas
		this.context = canvas.getContext("2d");
		
    	if (!this.context) throw new Error("Canvas 2D not avaliable");

		this.skyManager = new BackgroundManager(this.context, this.canvas)
		this.fruitManager = new FruitManager(this.context, this.canvas)
	}

	start() 
	{
		this.running = true;
		this.loop(0);
	}

  	stop() 
	{
    	this.running = false;
    	cancelAnimationFrame(this.animationId);
  	}

	lastTime = 0;

  	loop = (timestamp) => {
    	if (!this.running) return;

  		const deltaTime = (timestamp - this.lastTime) / 1000; // segundos desde o último frame
  		this.lastTime = timestamp;
		
    	this.update(deltaTime);

    	this.animationId = requestAnimationFrame(this.loop);
  	};

  	update(deltaTime) 
	{
		this.skyManager.update()
		this.fruitManager.Update(deltaTime)
  	}
}
