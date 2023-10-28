import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList.jsx';

function App() {
	const [editForm, setEditForm] = useState(false);
	const [editTodo, setEditTodo] = useState('');

	const handleEditForm = (todo) => {
		setEditForm(!editForm);
		setEditTodo(todo);
	};

	const cancelUpdate = () => {
		setEditForm(false);
	};

	return (
		<>
			<TodoInput
				editForm={editForm}
				editTodo={editTodo}
				cancelUpdate={cancelUpdate}
			/>
			<TodoList handleEditForm={handleEditForm} editForm={editForm} />
		</>
	);
}

export default App;
