import FruitSpawner from '../Entites/FruitSpawner'

export function GetNextFruit(currentFruitId, context, canvas)
{
	switch (currentFruitId) 
	{
		case 1:
			return new FruitSpawner(context, canvas, 'Banana', 0, "Wait, bananas don't grow on taller trees", 3,1, 2)
		case 2:
			return new FruitSpawner(context, canvas, 'Orange', 0, "Rich with vitamin C", 3,1, 3)
		case 3:
			return new FruitSpawner(context, canvas, 'Cherry', 0, "2 In 1!", 3,1, 4)
		case 4:
			return new FruitSpawner(context, canvas, 'Lemmon', 0, "If life give lemons, sell them", 3,1, 5)
		case 5:
			return new FruitSpawner(context, canvas, 'Pear', 0, "Is like a apple, but not too simple", 3,1, 6)
		case 6:
			return new FruitSpawner(context, canvas, 'Strawberry', 0, "Popular in candies", 3,1, 7)
		case 7:
			return new FruitSpawner(context, canvas, 'Peach', 0, "The fruit with an peculiar shape", 3,1, 8)
		case 8:
			return new FruitSpawner(context, canvas, 'Pineapple', 0, "They don't grow in trees, but is still great", 3,1, 9)
		case 9:
			return new FruitSpawner(context, canvas, 'Grape', 0, "10 in 1!!!", 3,1, 10)
		case 10:
			return new FruitSpawner(context, canvas, 'Berry', 0, "Not An creative name for a fruit", 3,1, 11)
		case 11:
			return new FruitSpawner(context, canvas, 'Watermellon', 0, "Full juice, full price, full value", 3,1, 12)
		case 12:
			return new FruitSpawner(context, canvas, 'Coconut', 0, "You can use as a fruit or use as a bowling ball", 3,1, 13)
		case 13:
			return new FruitSpawner(context, canvas, 'Mango', 0, "Cows favorite fruit", 3,1, 14)
		case 14:
			return new FruitSpawner(context, canvas, 'Acorn', 0, "It's a nut, not that nut, this nut", 3,1, 15)
		case 15:
			return new FruitSpawner(context, canvas, 'Custard Apple', 0, "Custard flavored apple (eww)", 3,1, 16)
		case 16:
			return new FruitSpawner(context, canvas, 'Star Fruit', 0, "This fruits name in portuguese is funnier", 3,1, 17)
		case 17:
			return new FruitSpawner(context, canvas, 'Lychee', 0, "This fruit has spikes, an perfect weapon", 3,1, 18)
		case 18:
			return new FruitSpawner(context, canvas, 'Water Apple', 0, "Water flavored apple ...wait", 3,1, 19)
		case 19:
			return new FruitSpawner(context, canvas, 'Tamarind', 0, "She tama on my rind?", 3,1, 20)
		case 20:
			return new FruitSpawner(context, canvas, 'Jackfruit', 0, "Don't stay under Jackfruits trees", 3,1, 21)
		case 21:
			return new FruitSpawner(context, canvas, 'Broccoli', 0, "This fruit taste so bad that it's not even considered a fruit", 3,1, 22)
		case 22:
			return new FruitSpawner(context, canvas, 'Lettuce', 0, "Meta choice for salads", 3,1, 23)
		case 23:
			return new FruitSpawner(context, canvas, 'Green Pepper', 0, "Despise been called Green Pepper, is can also be yellow or red", 3,1, 24)
		case 24:
			return new FruitSpawner(context, canvas, 'Pumpkin', 0, "While been called that, this fruit don't pumps your kins", 3,1, 25)
	}
}