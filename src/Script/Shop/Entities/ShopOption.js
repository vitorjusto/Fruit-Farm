export default class ShopOption
{
	constructor(currency, price, name, description, shopImagePath, onTrade)
	{
		this.Currency = currency;
		this.Price = price;

		this.Name = name;
		this.Description = description;
		this.ShopImagePath = shopImagePath;

		this.OnTrade = onTrade
	}
}