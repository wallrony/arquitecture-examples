import FoodAPI from "../api/FoodAPI";
import Food from "../core/domain/models/Food";
import IFoodService from "../core/interfaces/services/IFoodService";

class FoodService extends IFoodService {
	fetch(): Promise<Food[]> {
		return new FoodAPI().fetch();
	}
}

export default FoodService;
