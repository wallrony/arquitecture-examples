import axios from "axios";
import Food from "../core/domain/models/Food";
import IFoodAPI from "../core/interfaces/api/IFoodAPI";

class FoodAPI extends IFoodAPI {
	// fetch
	async fetch(): Promise<Food[]> {
		// Realizando requisição HTTP com método GET no recurso/rota "/foods"
		const response = await axios.get("http://localhost:3333/foods");

		// Inicializando lista de comidas
		const foods: Food[] = [];

		// Iterando pela lista de comidas presentes nos dados da resposta da requisição (response)
		for (let i = 0; i < response.data.length; i++) {
			// Construindo variável que contém o item da iteração
			const foodJSON = response.data[i];

			// Instanciando comida passando os valores do item da iteração
			const food = new Food(
				foodJSON["id"],
				foodJSON["name"],
				foodJSON["value"],
				foodJSON["quantity"]
			);

			// Adicionando comida na lista de comidas
			foods.push(food);
		}

		// Retornando lista de comida
		return foods;
	}
}

export default FoodAPI;
