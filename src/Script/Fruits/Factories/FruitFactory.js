import FruitSpawner from '../Entites/FruitSpawner'
import { ESeason, EPeriod } from '../Enums/FruitsEnums'
export function GetNextFruit(currentFruitId, context, canvas)
{
	switch (currentFruitId) 
	{
		case 1:
			return new FruitSpawner(context, canvas, 'Banana', 0, "Wait, bananas don't grow on taller trees", 5, 10, 6, 2, EPeriod.None, ESeason.None)
		case 2:
			return new FruitSpawner(context, canvas, 'Orange', 0, "Rich with vitamin C", 10, 20, 7, 3, EPeriod.None, ESeason.None)
		case 3:
			return new FruitSpawner(context, canvas, 'Cherry', 0, "2 In 1!", 35, 25, 10, 4, EPeriod.None, ESeason.None)
		case 4:
			return new FruitSpawner(context, canvas, 'Lemmon', 0, "If life give lemons, sell them", 3,1, 2, 5, EPeriod.None, ESeason.None)
		case 5:
			return new FruitSpawner(context, canvas, 'Pear', 0, "Is like a apple, but not too simple", 3,1, 2, 6, EPeriod.None, ESeason.None)
		case 6:
			return new FruitSpawner(context, canvas, 'Strawberry', 0, "Popular in candies", 3,1, 2, 7, EPeriod.None, ESeason.None)
		case 7:
			return new FruitSpawner(context, canvas, 'Peach', 0, "The fruit with an peculiar shape", 3,1, 2, 8, EPeriod.None, ESeason.None)
		case 8:
			return new FruitSpawner(context, canvas, 'Pineapple', 0, "They don't grow in trees, but is still great", 3,1, 2, 9, EPeriod.None, ESeason.None)
		case 9:
			return new FruitSpawner(context, canvas, 'Grape', 0, "10 in 1!!!", 3,1, 2, 10, EPeriod.None, ESeason.None)
		case 10:
			return new FruitSpawner(context, canvas, 'Berry', 0, "Not An creative name for a fruit", 3,1, 2, 11, EPeriod.None, ESeason.None)
		case 11:
			return new FruitSpawner(context, canvas, 'Watermellon', 0, "Full juice, full price, full value", 3,1, 2, 12, EPeriod.None, ESeason.None)
		case 12:
			return new FruitSpawner(context, canvas, 'Coconut', 0, "You can use as a fruit or use as a bowling ball", 3,1, 2, 13, EPeriod.None, ESeason.None)
		case 13:
			return new FruitSpawner(context, canvas, 'Mango', 0, "Cows favorite fruit", 3,1, 2, 14, EPeriod.None, ESeason.None)
		case 14:
			return new FruitSpawner(context, canvas, 'Acorn', 0, "It's a nut, not that nut, this nut", 3,1, 2, 15, EPeriod.None, ESeason.None)
		case 15:
			return new FruitSpawner(context, canvas, 'Custard Apple', 0, "Custard flavored apple (eww)", 3,1, 2, 16, EPeriod.None, ESeason.None)
		case 16:
			return new FruitSpawner(context, canvas, 'Star Fruit', 0, "This fruits name in portuguese is funnier", 3,1, 2, 17, EPeriod.None, ESeason.None)
		case 17:
			return new FruitSpawner(context, canvas, 'Lychee', 0, "This fruit has spikes, an perfect weapon", 3,1, 2, 18, EPeriod.None, ESeason.None)
		case 18:
			return new FruitSpawner(context, canvas, 'Water Apple', 0, "Water flavored apple ...wait", 3,1, 2, 19, EPeriod.None, ESeason.None)
		case 19:
			return new FruitSpawner(context, canvas, 'Tamarind', 0, "She tama on my rind?", 3,1, 2, 20, EPeriod.None, ESeason.None)
		case 20:
			return new FruitSpawner(context, canvas, 'Jackfruit', 0, "Don't stay under Jackfruits trees", 3,1, 2, 21, EPeriod.None, ESeason.None)
		case 21:
			return new FruitSpawner(context, canvas, 'Broccoli', 0, "This fruit taste so bad that it's not even considered a fruit", 3,1, 2, 22, EPeriod.None, ESeason.None)
		case 22:
			return new FruitSpawner(context, canvas, 'Lettuce', 0, "Meta choice for salads", 3,1, 2, 23, EPeriod.None, ESeason.None)
		case 23:
			return new FruitSpawner(context, canvas, 'Green Pepper', 0, "Despise been called Green Pepper, is can also be yellow or red", 3,1, 2, 24, EPeriod.None, ESeason.None)
		case 24:
			return new FruitSpawner(context, canvas, 'Pumpkin', 0, "While been called that, this fruit don't pumps your kins", 3,1, 2, 25, EPeriod.None, ESeason.None)
	}
}

export function GetFruitNameById(currentFruitId)
{
	
	switch (currentFruitId) 
	{
		case 1:
			return "Apple"
		case 2:
			return 'Banana'
		case 3:
			return 'Orange'
		case 4:
			return 'Cherry'
		case 5:
			return 'Lemmon'
		case 6:
			return 'Pear'
		case 7:
			return 'Strawberry'
		case 8:
			return 'Peach'
		case 9:
			return "Pineapple"
		case 10:
			return "Grape"
		case 11:
			return "Berry"
		case 12:
			return "Watermellon"
		case 13:
			return "Coconut"
		case 14:
			return "Mango"
		case 15:
			return "Acorn"
		case 16:
			return "Custard Apple"
		case 17:
			return "Star Fruit"
		case 18:
			return "Lychee"
		case 19:
			return "Water Apple"
		case 20:
			return "Tamarind"
		case 21:
			return "Jackfruit"
		case 22:
			return "Broccoli"
		case 23:
			return "Lettuce"
		case 24:
			return "Green Pepper"
		case 26:
			return 'Onion'
		case 27:
			return 'Tomato'
		case 28:
			return 'Corn'
		case 29:
			return 'Garlic'
		case 30:
			return 'Chilli Peper'
		case 31:
			return 'Carrot'
		case 32:
			return 'Eggplant'
		case 33:
			return 'Sweet Potato'
		case 34:
			return 'Avocado'
		case 35:
			return "Jack o' Lantern"
		case 36:
			return 'Papaya'
		case 37:
			return 'Kiwi'
		case 38:
			return 'Ice Fruit'
		case 39:
			return 'Persimmon'
		case 40:
			return 'Cloud Berry'
		case 41:
			return 'Turnip'
		case 42:
			return 'Potato'
		case 43:
			return 'Cucumber'
		case 44:
			return 'Cabbage'
		case 45:
			return 'Grape Juice'
		case 46:
			return 'Dragon Fruit'
		case 47:
			return 'Popcorn'
		case 48:
			return 'Sun Fruit'
		case 49:
			return 'Marian Mango'
		case 50:
			return 'Blackberry'
		case 51:
			return 'Strawberry Popsicle'
		case 52:
			return 'Guarana'
		case 53:
			return 'Cocoa'
		case 54:
			return 'Moon Fruit'
	}
}

export function GetAllSeasonalFruit(fruits, context, canvas)
{
	var result = []

	for (let i = 0; i < fruits.length; i++) 
	{
		result.push(GetSeasonalFruit(fruits[i], context, canvas))
	}

	return result
} 

export function GetSeasonalFruit(id, context, canvas)
{
	switch (id) 
	{
		case 26:
			return new FruitSpawner(context, canvas, 'Onion', 0, "s", 5, 10, 6, 26, EPeriod.None, ESeason.Summer)
		case 27:
			return new FruitSpawner(context, canvas, 'Tomato', 0, "s", 10, 20, 7, 27, EPeriod.None, ESeason.Summer)
		case 28:
			return new FruitSpawner(context, canvas, 'Corn', 0, "s", 35, 25, 10, 28, EPeriod.None, ESeason.Summer)
		case 29:
			return new FruitSpawner(context, canvas, 'Garlic', 0, "s", 3,1, 2, 29, EPeriod.None, ESeason.Summer)
		case 30:
			return new FruitSpawner(context, canvas, 'Chilli Peper', 0, "s", 3,1, 2, 30, EPeriod.None, ESeason.Summer)
		case 31:
			return new FruitSpawner(context, canvas, 'Carrot', 0, "s", 3,1, 2, 31, EPeriod.None, ESeason.Fall)
		case 32:
			return new FruitSpawner(context, canvas, 'Eggplant', 0, "s", 3,1, 2, 32, EPeriod.None, ESeason.Fall)
		case 33:
			return new FruitSpawner(context, canvas, 'Sweet Potato', 0, "s", 3,1, 2, 33, EPeriod.None, ESeason.Fall)
		case 34:
			return new FruitSpawner(context, canvas, 'Avocado', 0, "s", 3,1, 2, 34, EPeriod.None, ESeason.Fall)
		case 35:
			return new FruitSpawner(context, canvas, "Jack o' Lantern", 0, "s", 3,1, 2, 35, EPeriod.Night, ESeason.Fall)
		case 36:
			return new FruitSpawner(context, canvas, 'Papaya', 0, "s", 3,1, 2, 36, EPeriod.None, ESeason.Winter)
		case 37:
			return new FruitSpawner(context, canvas, 'Kiwi', 0, "s", 3,1, 2, 37, EPeriod.None, ESeason.Winter)
		case 38:
			return new FruitSpawner(context, canvas, 'Ice Fruit', 0, "s", 3,1, 2, 38, EPeriod.None, ESeason.Winter)
		case 39:
			return new FruitSpawner(context, canvas, 'Persimmon', 0, "s", 3,1, 2, 39, EPeriod.None, ESeason.Winter)
		case 40:
			return new FruitSpawner(context, canvas, 'Cloud Berry', 0, "s", 3,1, 2, 40, EPeriod.None, ESeason.Winter)
		case 41:
			return new FruitSpawner(context, canvas, 'Turnip', 0, "s", 3,1, 2, 41, EPeriod.None, ESeason.Spring)
		case 42:
			return new FruitSpawner(context, canvas, 'Potato', 0, "s", 3,1, 2, 42, EPeriod.None, ESeason.Spring)
		case 43:
			return new FruitSpawner(context, canvas, 'Cucumber', 0, "s", 3,1, 2, 43, EPeriod.None, ESeason.Spring)
		case 44:
			return new FruitSpawner(context, canvas, 'Cabbage', 0, "s", 3,1, 2, 44, EPeriod.None, ESeason.Spring)
		case 45:
			return new FruitSpawner(context, canvas, 'Grape Juice', 0, "s", 3,1, 2, 45, EPeriod.None, ESeason.Spring)
		case 46:
			return new FruitSpawner(context, canvas, 'Dragon Fruit', 0, "s", 3,1, 2, 46, EPeriod.Day, ESeason.None)
		case 47:
			return new FruitSpawner(context, canvas, 'Popcorn', 0, "s", 3,1, 2, 47, EPeriod.Day, ESeason.None)
		case 48:
			return new FruitSpawner(context, canvas, 'Sun Fruit', 0, "s", 3,1, 2, 48, EPeriod.Day, ESeason.None)
		case 49:
			return new FruitSpawner(context, canvas, 'Marian Mango', 0, "W", 3,1, 2, 49, EPeriod.Afternoon, ESeason.None)
		case 50:
			return new FruitSpawner(context, canvas, 'Blackberry', 0, "W", 3,1, 2, 50, EPeriod.Afternoon, ESeason.None)
		case 51:
			return new FruitSpawner(context, canvas, 'Strawberry Popsicle', 0, "W", 3,1, 2, 51, EPeriod.Afternoon, ESeason.None)
		case 52:
			return new FruitSpawner(context, canvas, 'Guarana', 0, "W", 3,1, 2, 52, EPeriod.Night, ESeason.None)
		case 53:
			return new FruitSpawner(context, canvas, 'Cocoa', 0, "W", 3,1, 2, 53, EPeriod.Night, ESeason.None)
		case 54:
			return new FruitSpawner(context, canvas, 'Moon Fruit', 0, "W", 3,1, 2, 54, EPeriod.Night, ESeason.None)
	}

}