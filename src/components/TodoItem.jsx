import React from "react";
import { useState } from "react";
import "./css/TodoItem.css";

function TodoItem({ todo, deleteTask, editTask }) {
	const [isEdit, setEdit] = useState(false);
	const [task, setTask] = useState(todo.task);
	const [desc, setDesc] = useState(todo.description);

	return (
		<div className={`todo-item ${todo.isCompleted ? "complete" : "pending"}`}>
			{!isEdit ? (
				<>
					<div className="task">{todo.task}</div>
					{todo.description === "" ? (
						<div className="desc no-desc">No Desciption</div>
					) : (
						<div className="desc">{todo.description}</div>
					)}
					<div className="button-container">
						<button onClick={() => deleteTask(todo.id)}>Delete</button>
						<button onClick={() => setEdit((state) => !state)}>Edit</button>
						<button
							onClick={() => {
								editTask({ ...todo, isCompleted: !todo.isCompleted });
							}}
						>
							{todo.isCompleted ? "Pending" : "Done"}
						</button>
					</div>
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Task"
						name="task"
						id="task-edit"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<textarea
						placeholder="Description"
						name="desc"
						id="desc-edit"
						cols="30"
						rows="10"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
					<div className="button-container edited-btn-cont">
						<button onClick={() => deleteTask(todo.id)}>Delete</button>
						<button
							onClick={() => {
								setEdit(false);
								editTask({ ...todo, task, description: desc, isCompleted: todo.isCompleted });
							}}
						>
							Save
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default TodoItem;
