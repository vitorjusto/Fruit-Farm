
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
		this.context.fillStyle = "#1199ff"
    	this.context.fillRect(0, 0, 100000, 1000000);

		//Draw tree trunk ground
		var trunkSize = 80
		this.context.fillStyle = "brown"
    	this.context.fillRect(((this.canvas.width) / 2) - (trunkSize / 2), 150, trunkSize, 1000);

		//Draw tree cope
		var copeWidth = 800
		this.context.fillStyle = "rgb(0, 255, 0)"
    	this.context.fillRect(((this.canvas.width) / 2) - (copeWidth / 2), 80, copeWidth, 300);

		//Draw ground
    	this.context.fillRect(0, (this.canvas.height) - 60, this.canvas.width, 280);

  	}
}