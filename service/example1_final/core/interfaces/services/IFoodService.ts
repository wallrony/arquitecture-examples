import Food from "../../domain/models/Food";

abstract class IFoodService {
	abstract fetch(): Promise<Food[]>;
}

export default IFoodService;
