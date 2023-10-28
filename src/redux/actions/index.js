export const addTodo = (data) => {
	return {
		type: 'ADD_TODO',
		payload: data,
	};
};

export const deleteTodo = (payload) => {
	return {
		type: 'DELETE_TODO',
		payload,
	};
};

export const updateStatusTodo = (payload) => {
	return {
		type: 'UPDATE_STATUS_TODO',
		payload,
	};
};

export const updateTodo = (payload) => {
	return {
		type: 'UPDATE_TODO',
		payload,
	};
};
