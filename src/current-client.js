const currentClient = {}

const getClient = () => currentClient.client
const getScoundrel = () => currentClient.client?.scoundrel
const setClient = (newClient) => currentClient.client = newClient

export {getClient, getScoundrel, setClient}
