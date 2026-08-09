
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
  	}
}