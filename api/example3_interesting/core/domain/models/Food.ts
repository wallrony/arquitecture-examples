// Classe Food
class Food {
	id?: number;
	name?: string;
	value?: number;
	quantity?: number;

	// Declaração de Atributos
	static fromJSON(json: Record<string, unknown>): Food {
		const food = new Food();
		food.id = Number(json["id"]);
		food.name = String(json["name"]);
		food.value = Number(json["value"]);
		food.quantity = Number(json["quantity"]);
		return food;
	}

	// toString
	toString() {
		return `Food { ID: ${this.id}, Name: ${this.name}, Value: ${this.value}, Quantity: ${this.quantity} }`;
	}
}

export default Food;
