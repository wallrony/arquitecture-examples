import axios, { AxiosInstance } from "axios";

abstract class IAPI {
	protected readonly client: AxiosInstance;

	constructor() {
		// Instanciando Cliente HTTP do Axios com dados básicos pré-definidos
		this.client = axios.create({
			baseURL: "http://localhost:3333",
		});
	}
}

export default IAPI;
