import Food from "../../domain/models/Food";
import IAPI from "./IAPI";

abstract class IFoodAPI extends IAPI {
	abstract fetch(): Promise<Food[]>;
}

export default IFoodAPI;
