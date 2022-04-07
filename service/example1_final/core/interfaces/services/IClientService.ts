import Client from "../../domain/models/Client";

abstract class IClientService {
	abstract fetch(): Promise<Client[]>;
}

export default IClientService;
