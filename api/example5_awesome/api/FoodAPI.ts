import Food from "../core/domain/models/Food";
import IFoodAPI from "../core/interfaces/api/IFoodAPI";

class FoodAPI extends IFoodAPI {
	async fetch(): Promise<Food[]> {
		const response = await this.client.get("/foods");
		const foods: Food[] = [];
		for (const foodJSON of response.data) {
			foods.push(Food.fromJSON(foodJSON));
		}
		return foods;
	}
}

export default FoodAPI;
