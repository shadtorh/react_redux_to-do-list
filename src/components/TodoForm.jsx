import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todoSlice";
import { IoMdAdd } from "react-icons/io";

const TodoForm = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim()) {
			dispatch(addTodo(text));
			setText("");
		}
	};

	return (
		<>
			<h2 className="text-2xl font-bold text-slate-800 mb-4">Add New Task</h2>
			<form onSubmit={handleSubmit}>
				<div className="flex gap-3">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="What needs to be done?"
						className="flex-1 px-4 py-2 rounded-lg border border-slate-200 
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-1 
                     hover:bg-violet-700 transition-colors duration-200"
					>
						<IoMdAdd className="text-xl" />
						Add
					</button>
				</div>
			</form>
		</>
	);
};

export default TodoForm;
