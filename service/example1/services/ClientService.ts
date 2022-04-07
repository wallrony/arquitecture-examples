import ClientAPI from "../api/ClientAPI";
import Client from "../core/domain/models/Client";
import IClientService from "../core/interfaces/services/IClientService";

class ClientService extends IClientService {
	fetch(): Promise<Client[]> {
		return new ClientAPI().fetch();
	}
}

export default ClientService;
