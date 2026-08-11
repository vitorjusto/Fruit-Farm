import BackgroundManager from './BackgroundManager'
import FruitManager from './FruitManager'
import TreeManager from './TreeManager'
import FlowerManager from './FlowerManager'
import DogManager from './DogManager'
import BeeManager from './BeeManager'

export default class GameManager
{
	context;
	canvas;

	skyManager;
	fruitManager;

	money;
	setMoney;

	constructor(canvas, money, setMoney)
	{
		this.canvas = canvas
		this.context = canvas.getContext("2d");
		
    	if (!this.context) throw new Error("Canvas 2D not avaliable");
		
		this.context.imageSmoothingEnabled = false;
		this.skyManager = new BackgroundManager(this.context, this.canvas)
		this.treeManager = new TreeManager(this.context, this.canvas)
		this.DogManager = new DogManager(this.context, this.canvas)
		this.BeeManager = new BeeManager(this.context, this.canvas)

		this.fruitManager = new FruitManager(this.context, this.canvas)
		this.flowerManager = new FlowerManager(this.context, this.canvas, 
			(amount) => {this.money += amount
			this.setMoney(this.money)})

		this.money = money
		this.setMoney = setMoney
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
		this.treeManager.Update()
		this.DogManager.Update(deltaTime)
		this.BeeManager.Update(deltaTime)
		this.fruitManager.Update(deltaTime)
		this.flowerManager.Update(deltaTime)
  	}

	HarvestFruits()
	{
		var total = this.fruitManager.HarvestFruits()
		total += this.DogManager.PetDog()

		this.AddMoney(total)
	}

	AddMoney(amount)
	{
		this.money += amount
		this.setMoney(this.money)

	}
}
