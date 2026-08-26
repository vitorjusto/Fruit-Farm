export default class Bird
{
	context;
	X;
	Y;

	constructor(context, canvas, x, y, xSpeed, ySpeed)
	{
		this.context = context;
		this.canvas = canvas;

		this.X = x;
		this.Y = y;
		this.Size = 50

		this.xSpeed = xSpeed
		this.ySpeed = ySpeed

		this.queueDespawn = false
	}

	Update(deltaTime)
	{
		if(this.queueDespawn)
			return;

		this.context.fillStyle = "Blue"

		this.X += this.xSpeed * deltaTime
		this.Y += this.ySpeed * deltaTime

		this.context.fillRect(this.X, this.Y, this.Size, this.Size);

		if(this.X < -100 || this.X > this.canvas.width + 100)
			this.queueDespawn = true;
	}

	VerifyClick(x, y)
	{
		if(this.queueDespawn)
			return;

		console.log(`click: (${x}, ${y}), bird: (${this.X}, ${this.Y})`)

		if(this.X > x)
			return;

		if(this.X + this.Size < x)
			return;

		if(this.Y > y)
			return;

		if(this.Y + this.Size < y)
			return;

		this.queueDespawn = true
	}
}