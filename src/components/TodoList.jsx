import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateStatusTodo } from '../redux/actions';

const TodoList = ({ handleEditForm, editForm }) => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);

	return (
		<div className="mt-10">
			{todos.map((todo) => (
				<div
					className="flex p-3 gap-4 justify-between mt-2 mb-2 bg-gray-100 max-w-md mx-auto rounded-md"
					key={todo.id}>
					{!editForm && (
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => dispatch(updateStatusTodo(todo.id))}
						/>
					)}
					<ul className="font-medium text-xl">
						<li
							className={
								todo.completed ? 'line-through' : 'text-decoration-none'
							}>
							{todo.title}
						</li>
					</ul>
					{!editForm && (
						<div className="flex gap-4">
							<button
								className="bg-blue-500 px-4 py-1 rounded-md text-white"
								onClick={() => handleEditForm(todo)}>
								Edit
							</button>
							<button
								className="bg-red-500 px-4 py-1 rounded-md text-white"
								onClick={() => dispatch(deleteTodo(todo.id))}>
								Delete
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default TodoList;
