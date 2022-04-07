import Client from "../core/domain/models/Client";
import IClientAPI from "../core/interfaces/api/IClientAPI";

class ClientAPI extends IClientAPI {
	async fetch(): Promise<Client[]> {
		const response = await this.client.get("/clients");
		const clients: Client[] = [];
		for (const clientJSON of response.data) {
			clients.push(Client.fromJSON(clientJSON));
		}
		return clients;
	}
}

export default ClientAPI;
