import axios from "axios";

async function listClients() {
	const response = await axios.get("http://localhost:3333/clients");

	console.log(response.data);
}

async function createClient() {
	const response = await axios.post("http://localhost:3333/clients", {
		id: 4,
		name: "Cara Teste",
		cash: 50,
	});

	console.log(response.data);
}

async function updateClient(id: number) {
	const response = await axios.put(`http://localhost:3333/clients/${id}`, {
		name: "Cara Teste atualizado",
		cash: 50,
	});

	console.log(response.data);
}

async function deleteClient(id: number) {
	const response = await axios.delete(`http://localhost:3333/clients/${id}`);

	console.log(response.data);
}

async function main() {
	console.log("Listing all clients");
	await listClients();
	console.log("terminou");
	console.log("Creating client");
	await createClient();
	console.log("Listing all clients");
	await listClients();
	console.log("Updating the client 4");
	await updateClient(4);
	console.log("Deleting the client 4");
	await deleteClient(4);
}

main();
