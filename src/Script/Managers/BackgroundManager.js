
import { EPeriod } from './PrestigeManager'
import { gameManager } from '../../App'

export default class BackgroundManager
{
	context;
	canvas;

	constructor(context, canvas)
	{
		this.context = context
		this.canvas = canvas
	}

	update()
	{
		if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Morning)
			this.context.fillStyle = "#1199ff"
		else if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Afternoon)
			this.context.fillStyle = "#ff9811"
		else if(gameManager.PrestigeManager.CurrentPeriod == EPeriod.Night)
			this.context.fillStyle = "#060038"

    	this.context.fillRect(0, 0, 100000, 1000000);
  	}
}