
export default class SeedManager
{

	constructor(
				setGreenSeed,
				setOrangeSeed, 
				setBlueSeed, 
				setPinkSeed, 
				setGoldSeed,
				setRareSeed)
	{
		this.greenSeed = 0;
		this.orangeSeed = 0;
		this.blueSeed = 0;
		this.pinkSeed = 0;
		this.goldSeed = 0;
		this.rareSeed = 0;
		
		this.setUIGreenSeed = setGreenSeed;
		this.setUIOrangeSeed = setOrangeSeed;
		this.setUIBlueSeed = setBlueSeed;
		this.setUIPinkSeed = setPinkSeed;
		this.setUIGoldSeed = setGoldSeed;
		this.setUIRareSeed = setRareSeed;
		
		this.setUIGreenSeed(1);
		this.setUIOrangeSeed(3);
		this.setUIBlueSeed(3);
		this.setUIPinkSeed(4);
		this.setUIGoldSeed(5);
		this.setUIRareSeed(6);
	}

	SetGreenSeed(value)
	{
		this.greenSeed = value
		this.setUIGreenSeed(this.greenSeed);
	}

	SetOrangeSeed(value)
	{
		this.orangeSeed = value
		this.setUIOrangeSeed(this.orangeSeed);
	}

	SetBlueSeed(value)
	{
		this.blueSeed = value
		this.setUIBlueSeed(this.blueSeed);
	}

	SetPinkSeed(value)
	{
		this.pinkSeed = value
		this.setUIPinkSeed(this.pinkSeed);
	}

	SetGoldSeed(value)
	{
		this.goldSeed = value
		this.setUIGoldSeed(this.goldSeed);
	}

	SetRareSeed(value)
	{
		this.rareSeed = value
		this.setUIRareSeed(this.rareSeed);
	}
}