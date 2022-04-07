import Food from "../core/domain/models/Food";
import IFoodAPI from "../core/interfaces/api/IFoodAPI";

class FoodAPI extends IFoodAPI {
	async fetch(): Promise<Food[]> {
		const response = await this.client.get("/foods");
		const foods: Food[] = response.data.map((item: Record<string, unknown>) =>
			Food.fromJSON(item)
		);
		return foods;
	}
}

export default FoodAPI;
