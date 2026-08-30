
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
		
		this.setUIGreenSeed(0);
		this.setUIOrangeSeed(0);
		this.setUIBlueSeed(0);
		this.setUIPinkSeed(0);
		this.setUIGoldSeed(0);
		this.setUIRareSeed(0);
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

	
	AddGreenSeed(value)
	{
		this.greenSeed += value
		this.setUIGreenSeed(this.greenSeed);
	}

	AddOrangeSeed(value)
	{
		this.orangeSeed += value
		this.setUIOrangeSeed(this.orangeSeed);
	}

	AddBlueSeed(value)
	{
		this.blueSeed += value
		this.setUIBlueSeed(this.blueSeed);
	}

	AddPinkSeed(value)
	{
		this.pinkSeed += value
		this.setUIPinkSeed(this.pinkSeed);
	}

	AddGoldSeed(value)
	{
		this.goldSeed += value
		this.setUIGoldSeed(this.goldSeed);
	}

	AddRareSeed(value)
	{
		this.rareSeed += value
		this.setUIRareSeed(this.rareSeed);
	}
}