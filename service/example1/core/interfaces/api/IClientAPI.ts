import Client from "../../domain/models/Client";
import IAPI from "./IAPI";

abstract class IClientAPI extends IAPI {
	abstract fetch(): Promise<Client[]>;
}

export default IClientAPI;
