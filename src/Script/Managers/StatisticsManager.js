import GlobalStats from "../Statistics/Entities/GlobalStats";
import FruitStats from "../Statistics/Entities/FruitsStats";

export default class StatisticsManager
{
	constructor()
	{
		this.GlobalStats = new GlobalStats()
		this.FruitsStats = new FruitStats()
	}
}