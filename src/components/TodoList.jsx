import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../stores/todoSlice";
import { HiOutlineTrash } from "react-icons/hi";
import { IoCheckmarkCircleOutline, IoEllipseOutline } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);
	const dispatch = useDispatch();

	const [editingTodo, setEditingTodo] = useState(null);
	const [editedText, setEditedText] = useState("");

	const handleEdit = (id) => {
		setEditingTodo(id);
		setEditedText(todos.find((todo) => todo.id === id).text);
	};

	const handleSave = () => {
		dispatch(editTodo({ id: editingTodo, text: editedText }));
		setEditingTodo(null);
	};

	return (
		<div className="space-y-3">
			{todos.length === 0 ? (
				<div className="text-center py-8">
					<p className="text-slate-500">Your task list is empty</p>
					<p className="text-slate-400 text-sm">
						Add a new task to get started
					</p>
				</div>
			) : (
				todos.map((todo) => (
					<div
						key={todo.id}
						className="group flex items-center gap-3 p-3 rounded-lg border border-slate-100 
                     hover:border-violet-100 hover:bg-slate-50 transition-all duration-200 scale-100 hover:scale-105"
					>
						<button
							onClick={() => dispatch(toggleTodo(todo.id))}
							className={`flex-shrink-0 text-2xl transition-colors duration-200
                       ${todo.completed ? "text-green-500" : "text-slate-300 hover:text-violet-500"}`}
						>
							{todo.completed ? (
								<IoCheckmarkCircleOutline />
							) : (
								<IoEllipseOutline />
							)}
						</button>

						<span
							className={`flex-1 ${
								todo.completed
									? "text-slate-400 line-through"
									: "text-slate-700"
							}`}
						>
							{todo.text}
						</span>

						{editingTodo === todo.id ? (
							<div className="flex items-center gap-2">
								<input
									type="text"
									value={editedText}
									onChange={(e) => setEditedText(e.target.value)}
									className="flex-1 border border-slate-200 rounded-md p-2"
								/>
								<button
									onClick={handleSave}
									className="bg-violet-500 text-white px-4 py-2 rounded-md"
								>
									Save
								</button>
							</div>
						) : (
							<button
								onClick={() => {
									handleEdit(todo.id);
									setEditedText(todo.text);
								}}
								className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-slate-400 
                       hover:text-violet-500 transition-all duration-200"
							>
								<MdEditNote />
							</button>
						)}

						<button
							onClick={() => dispatch(deleteTodo(todo.id))}
							className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-slate-400 
                       hover:text-red-500 transition-all duration-200"
						>
							<HiOutlineTrash className="text-xl" />
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default TodoList;
