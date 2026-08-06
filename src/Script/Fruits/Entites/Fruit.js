
export default class Fruit
{
	context;
	X;
	Y;
	image;
	ImageLoaded;

	constructor(context, x, y)
	{
		this.context = context;
		this.X = x;
		this.Y = y;
    	this.image = new Image();
   		this.image.src = "/assets/Fruits/Apple.png"; // ou uma URL
    	this.image.onload = () => {
    	  this.ImageLoaded = true
    	};
    	this.image.onerror = (e) => {
    	  console.log(e)
    	};
	}

	DrawFruit(branchUpgradeId)
	{
		if(!this.ImageLoaded)
			return;

		var sx = Math.floor((branchUpgradeId - 1)% 6) * 32
		var sy = Math.floor((branchUpgradeId - 1)/ 6) * 32
    	this.context.drawImage(this.image, sx, sy, 32, 32, this.X, this.Y, 64, 64);
	}
}