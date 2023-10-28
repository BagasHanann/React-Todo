import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/actions';

const TodoInput = ({ editForm, editTodo, cancelUpdate }) => {
	const dispatch = useDispatch();

	const [todoValue, setTodoValue] = useState('');
	const [editValue, setEditValue] = useState('');

	useEffect(() => {
		setEditValue(editTodo.title);
	}, [editTodo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let newTodo = {
			id: Date.now().toLocaleString(),
			title: todoValue,
			completed: false,
		};

		dispatch(addTodo(newTodo));
	};

	const editSubmit = (e) => {
		e.preventDefault();
		let newTodo = {
			id: editTodo.id,
			title: editValue,
			completed: false,
		};

		dispatch(updateTodo(newTodo));
	};

	return (
		<>
			{!editForm ? (
				<div className="mt-10 flex justify-center items-center">
					<form
						className="flex w-100 rounded bg-gray-100"
						onSubmit={handleSubmit}>
						<input
							type="text"
							value={todoValue}
							onChange={(e) => setTodoValue(e.target.value)}
							placeholder="Enter your todo.."
							required
							className="w-full border-none bg-transparent px-4 py-1 text-gray-700 outline-none"
						/>
						<button className="m-2 bg-teal-500 px-4 py-1 text-white rounded">
							Submit
						</button>
					</form>
				</div>
			) : (
				<div className="mt-10 flex justify-center items-center">
					<form
						className="flex w-100 rounded bg-gray-100"
						onSubmit={editSubmit}>
						<input
							type="text"
							value={editValue || ''}
							onChange={(e) => setEditValue(e.target.value)}
							placeholder="Update your todo.."
							required
							className="w-full border-none bg-transparent px-4 py-1 text-gray-700 outline-none"
						/>
						<button className="m-2 bg-yellow-500 px-4 py-1 text-white rounded">
							Edit
						</button>
						<button
							className="m-2 bg-red-500 px-4 py-1 text-white rounded"
							onClick={cancelUpdate}>
							Back
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default TodoInput;
