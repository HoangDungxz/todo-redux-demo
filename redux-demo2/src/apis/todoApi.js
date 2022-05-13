import axios from 'axios';

const baseUrl = 'http://localhost:3004/todos';

const todoApi = {
	GET: async (id = null) => {
		let response;
		if (id == null) {
			response = await axios.get(`${baseUrl}`);
		} else {
			response = await axios.get(`${baseUrl}/${id}`);
		}

		await new Promise((resolve) => setTimeout(resolve, 1000));

		return response.data;
	},

	SAVE: async (todo) => {
		let response;
		if (todo.id !== undefined) {
			response = await axios.put(`${baseUrl}/` + todo.id, todo);
		} else {
			response = await axios.post(`${baseUrl}`, todo);
		}
		return response.data;
	},

	DELETE: (id) => {
		return axios.delete(`${baseUrl}/` + id);
	},
};

export default todoApi;
