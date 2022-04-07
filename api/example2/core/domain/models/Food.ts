// Classe Food
class Food {
	// Declaração de Atributos
	readonly id: number;
	readonly name: string;
	readonly value: number;
	readonly quantity: number;

	// Construtor
	constructor(id: number, name: string, value: number, quantity: number) {
		this.id = id;
		this.name = name;
		this.value = value;
		this.quantity = quantity;
	}

	// toString
	toString() {
		return `Food { ID: ${this.id}, Name: ${this.name}, Value: ${this.value}, Quantity: ${this.quantity} }`;
	}
}

export default Food;
