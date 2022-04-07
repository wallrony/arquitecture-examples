import Client from "../core/domain/models/Client";
import IClientAPI from "../core/interfaces/api/IClientAPI";

class ClientAPI extends IClientAPI {
	async fetch(): Promise<Client[]> {
		const response = await this.client.get("/clients");
		const clients: Client[] = response.data.map(
			(item: Record<string, unknown>) => Client.fromJSON(item)
		);
		return clients;
	}
}

export default ClientAPI;
