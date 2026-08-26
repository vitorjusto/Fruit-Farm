import Bird from "../Birds/Bird"

export default class BirdManager
{

	constructor(context, canvas)
	{
		this.context = context;
		this.canvas = canvas;

		this.cooldown = 0;
		this.Birds = [];
	}

	Update(deltaTime)
	{
		this.Birds.forEach(element => {
			element.Update(deltaTime)
		});

		this.Birds = this.Birds.filter(n => !n.queueDespawn);
		this.cooldown -= deltaTime

		if(this.cooldown <= 0)
		{
			this.cooldown = 50;
			this.Birds.push(new Bird(this.context, this.canvas, 100, 100, 100, 20))
		}
	}

	VerifyClick(event)
	{
    	const rect = this.canvas.getBoundingClientRect();
    	const scaleX = this.canvas.width / rect.width;
    	const scaleY = this.canvas.height / rect.height;

    	const x = (event.clientX - rect.left) * scaleX;
    	const y = (event.clientY - rect.top) * scaleY;

		this.Birds.forEach(element => {
			element.VerifyClick(x, y)
		});

		this.Birds = this.Birds.filter(n => !n.queueDespawn);
	}
}