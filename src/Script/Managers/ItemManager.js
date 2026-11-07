import ShopOption from "../Shop/Entities/ShopOption";
import { EShopCurrency } from "../Shop/Enums/EShopCurrency";


export default class ItemManager
{

	
	constructor(gameManager)
	{
		this.SeedSwap = [new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Green to Orange", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddGreenSeed(-2 * qtde)
											gameManager.seedManager.AddOrangeSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.orangeSeed, 
										2, 
										"Orange to Blue", 
										"Trade Offer: 2 Orange Seeds to 1 Blue Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddOrangeSeed(-2* qtde)
											gameManager.seedManager.AddBlueSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.blueSeed, 
										2, 
										"Blue to Pink", 
										"Trade Offer: 2 Blue Seeds to 1 Pink Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddBlueSeed(-2* qtde)
											gameManager.seedManager.AddPinkSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.pinkSeed, 
										2, 
										"Pink to Green", 
										"Trade Offer: 2 Pink Seeds to 1 Green Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddPinkSeed(-2* qtde)
											gameManager.seedManager.AddGreenSeed(1* qtde)
										})]

		this.ItemShop = [new ShopOption(EShopCurrency.goldSeed, 
										10, 
										"Bird Food", 
										"Increase bird spawn for 2 hours",
										'/assets/Item/BirdFood.png',
									(qtde) => {

										gameManager.seedManager.AddGoldSeed(-10 * qtde)
										this.BirdFoodCount += qtde;
									}),

						new ShopOption(EShopCurrency.goldSeed, 
										20, 
										"Butterfly", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Butterfly.png',
									(qtde) => {
										gameManager.seedManager.AddGoldSeed(-20 * qtde)
										this.ButterflyCount += qtde;
									}),	
						new ShopOption(EShopCurrency.goldSeed, 
										20, 
										"Coffe", 
										"Make bees work faster for 2 hours",
										'/assets/Item/Coffe.png',
									(qtde) => {

										gameManager.seedManager.AddGoldSeed(-20 * qtde)
										this.CoffeCount += qtde;
									}),	
						new ShopOption(EShopCurrency.goldSeed, 
										10, 
										"Dog Toy", 
										"Dog will give more money with less time",
										'/assets/Item/DogToy.png',
									(qtde) => {
										gameManager.seedManager.AddGoldSeed(-10 * qtde)
										this.DogToyCount += qtde;
									}),		
						new ShopOption(EShopCurrency.goldSeed, 
										2, 
										"Fertilizer", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/fertilizer.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.goldSeed, 
										2, 
										"Honey", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Honey.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.goldSeed, 
										50, 
										"Manure", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Manure.png',
									(qtde) => {
										gameManager.seedManager.AddGoldSeed(-50 * qtde)
										this.ManureCount += qtde;
									}),	
						]

		this.SpecialItens = [new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Fruit1", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/BirdFood.png',
									(qtde) => {}),
							new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Fruit2", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/BirdFood.png',
									(qtde) => {}),
							new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Fruit3", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/BirdFood.png',
									(qtde) => {}),

							new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Fruit4", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/BirdFood.png',
									(qtde) => {}),
						]

		this.BirdFoodCount = 0;
		this.ButterflyCount = 0;
		this.CoffeCount = 0;
		this.DogToyCount = 0;
		this.FeryilizerCount = 0;
		this.HoneyCount = 0;
		this.ManureCount = 0;
	}
}