import ClientAPI from "./api/ClientAPI";

async function listClients() {
	const clients = await new ClientAPI().fetch();

	console.log("All clients found:");

	for (let i = 0; i < clients.length; i++) {
		console.log(clients[i].toString());
	}
}

export default listClients;
