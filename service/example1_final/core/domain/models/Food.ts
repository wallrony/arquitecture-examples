class Food {
	id?: number;
	name?: string;
	value?: number;
	quantity?: number;

	static fromJSON(json: Record<string, unknown>): Food {
		const food = new Food();
		food.id = Number(json["id"]);
		food.name = String(json["name"]);
		food.value = Number(json["value"]);
		food.quantity = Number(json["quantity"]);
		return food;
	}

	toDTO(): Record<string, unknown> {
		const json: Record<string, unknown> = {};
		json["id"] = this.id;
		json["name"] = this.name;
		json["value"] = this.value;
		json["quantity"] = this.quantity;
		return json;
	}

	toString() {
		return `Food { ID: ${this.id}, Name: ${this.name}, Value: ${this.value}, Quantity: ${this.quantity} }`;
	}
}

export default Food;
