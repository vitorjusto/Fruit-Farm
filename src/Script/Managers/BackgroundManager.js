
import { EPeriod } from '../Fruits/Enums/FruitsEnums'
import { gameManager } from '../../App'

export default class BackgroundManager
{
	context;
	canvas;

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas

		
    	this.imgSun = new Image();
   		this.imgSun.src = `/assets/Backgrounds/Sun.png`;
    	this.imgSun.onload = () => {
    	  this.imgSunLoaded = true
    	};
    	this.imgSun.onerror = (e) => {
    	  console.log(e)
    	};

	}

	update()
	{
		if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Morning)
			this.DrawDay()
		else if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Afternoon)
			this.context.fillStyle = "#ff9811"
		else if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Night)
			this.context.fillStyle = "#060038"

  	}

	DrawDay()
	{


		this.context.fillStyle = "#1199ff"
    	this.context.fillRect(0, 0, 100000, 1000000);

		// this.context.drawImage(this.imgSun, 1070, 140, 62, 62);
	}
}