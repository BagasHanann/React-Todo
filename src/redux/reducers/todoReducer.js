const initialState = {
	todos: [
		{
			id: 1,
			title: 'Belajar react',
			completed: false,
		},
		{
			id: 2,
			title: 'Todo 1',
			completed: true,
		},
	],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case 'UPDATE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
			};
		case 'UPDATE_STATUS_TODO':
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: !todo.completed,
						};
					}
					return todo;
				}),
			};
		default:
			return state;
	}
};

export default todoReducer;
