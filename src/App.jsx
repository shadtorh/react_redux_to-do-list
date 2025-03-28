import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { RiTodoLine } from "react-icons/ri";

const App = () => {
	return (
		<div className="min-h-screen bg-slate-50 py-10">
			<div className="container mx-auto px-4 max-w-2xl">
				{/* Header */}
				<div className="flex items-center justify-center mb-8">
					<RiTodoLine className="text-5xl text-violet-600 mr-4" />
					<h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
						TaskFlow
					</h1>
				</div>

				{/* Card Container */}
				<div className="bg-white rounded-xl shadow-sm overflow-hidden">
					{/* Form Section */}
					<div className="p-6 border-b border-slate-100">
						<TodoForm />
					</div>

					{/* List Section */}
					<div className="p-6">
						<TodoList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
