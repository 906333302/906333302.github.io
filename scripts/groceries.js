// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: true
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		price: 8.00,
		organic: false
	},
	{
		name: "noodle",
		vegetarian: true,
		glutenFree: false,
		price: 1.82,
		organic: false
	},
	{
		name: "ginger",
		vegetarian: true,
		glutenFree: true,
		price: 0.94,
		organic: true
	},
	{
		name: "shrimp",
		vegetarian: false,
		glutenFree: true,
		price: 12.00,
		organic: false
	},
	{
		name: "apple juice",
		vegetarian: true,
		glutenFree: true,
		price: 5.00,
		organic: false
	},
	{
		name: "cookie",
		vegetarian: true,
		glutenFree: false,
		price: 4.5,
		organic: false
	},
	{
		name: "chocolate",
		vegetarian: true,
		glutenFree: true,
		price: 3.20,
		organic: true
	}



];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
		else if((restriction=="Organic")&&(prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
	}
	product_names.sort(function(a, b) {
		var priceA, priceB;
		for(let i = 0; i<products.length; i++){
			if(products[i].name===a){
				priceA = products[i].price;
			}else if(products[i].name === b){
				priceB = products[i].price;
			}
		}
		if (priceA < priceB) return 1;
		if (priceA > priceB) return -1;
		return 0;
	});
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	chosenWithoutPrice = [];
	var prod;
	console.log(chosenProducts);
	for(let i = 0; i<chosenProducts.length; i++){
		prod = chosenProducts[i].split(" ")[0];
		chosenWithoutPrice.push(prod);
	}
	console.log(chosenWithoutPrice);
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenWithoutPrice.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}