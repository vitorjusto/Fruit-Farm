import ShopOption from "../Shop/Entities/ShopOption";
import { EShopCurrency } from "../Shop/Enums/EShopCurrency";


export default class ItemManager
{

	
	constructor(gameManager)
	{
		this.SeedSwap = [new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Swap Green Seed to Orange Seed", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddGreenSeed(-2 * qtde)
											gameManager.seedManager.AddOrangeSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.orangeSeed, 
										2, 
										"Swap Orange Seed to Blue Seed", 
										"Trade Offer: 2 Orange Seeds to 1 Blue Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddOrangeSeed(-2* qtde)
											gameManager.seedManager.AddBlueSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.blueSeed, 
										2, 
										"Swap Blue Seed to Pink Seed", 
										"Trade Offer: 2 Blue Seeds to 1 Pink Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddBlueSeed(-2* qtde)
											gameManager.seedManager.AddPinkSeed(1* qtde)
										}),

						new ShopOption(EShopCurrency.pink, 
										2, 
										"Swap Pink Seed to Green Seed", 
										"Trade Offer: 2 Pink Seeds to 1 Green Seed",
										'/assets/Store/SeedSwap.png',
									(qtde) => {
											gameManager.seedManager.AddPinkSeed(-2* qtde)
											gameManager.seedManager.AddGreenSeed(1* qtde)
										})]

		this.ItemShop = [new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Bird Food", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/BirdFood.png',
									(qtde) => {}),

						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Butterfly", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Butterfly.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Coffe", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Coffe.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Dog Toy", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/DogToy.png',
									(qtde) => {}),		
						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Fertilizer", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/fertilizer.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Honey", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Honey.png',
									(qtde) => {}),	
						new ShopOption(EShopCurrency.greenSeed, 
										2, 
										"Manure", 
										"Trade Offer: 2 Green Seeds to 1 Orange Seed",
										'/assets/Item/Manure.png',
									(qtde) => {}),	
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
	}
}