import FoodService from "./services/FoodService";

async function listFoods() {
	const foods = await new FoodService().fetch();

	console.log("All foods found:");

	for (let i = 0; i < foods.length; i++) {
		console.log(foods[i].toString());
	}
}

export default listFoods;
