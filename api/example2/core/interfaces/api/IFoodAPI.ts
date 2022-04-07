import Food from "../../domain/models/Food";

abstract class IFoodAPI {
	// fetch
	// Essa função tem como objetivo realizar uma requisição para o backend para
	// solicitar todas as comidas presentes no banco de dados.
	abstract fetch(): Promise<Food[]>;
}

export default IFoodAPI;
