const API_BASE_URL = 'https://api.example.com'; // URL base de la API

// Función genérica para realizar una solicitud
const fetchFromApi = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtener lista de clientes
export const getClients = async () => {
    return await fetchFromApi('/clients');
};

// Crear un cliente
export const createClient = async (clientData) => {
    return await fetchFromApi('/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData),
    });
};

// Editar un cliente
export const updateClient = async (id, clientData) => {
    return await fetchFromApi(`/clients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData),
    });
};

// Eliminar un cliente
export const deleteClient = async (id) => {
    return await fetchFromApi(`/clients/${id}`, {
        method: 'DELETE',
    });
};
