class Client {
	id?: number;
	name?: string;
	cash?: number;

	static fromJSON(json: Record<string, unknown>): Client {
		const client = new Client();
		client.id = Number(json["id"]);
		client.name = String(json["name"]);
		client.cash = Number(json["cash"]);
		return client;
	}

	toDTO(): Record<string, unknown> {
		const json: Record<string, unknown> = {};
		json["id"] = this.id;
		json["name"] = this.name;
		json["cash"] = this.cash;
		return json;
	}

	toString() {
		return `Client { ID: ${this.id}, Name: ${this.name}, Cash: ${this.cash} }`;
	}
}

export default Client;
