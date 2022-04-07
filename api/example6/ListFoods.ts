import FoodAPI from "./api/FoodAPI";

async function listFoods() {
	const foods = await new FoodAPI().fetch();

	console.log("All foods found:");

	for (let i = 0; i < foods.length; i++) {
		console.log(foods[i].toString());
	}
}

export default listFoods;
