import ClientService from "./services/ClientService";

async function listClients() {
	const clients = await new ClientService().fetch();

	console.log("All clients found:");

	for (let i = 0; i < clients.length; i++) {
		console.log(clients[i].toString());
	}
}

export default listClients;
