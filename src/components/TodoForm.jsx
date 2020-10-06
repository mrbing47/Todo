import React from "react";
import { useState } from "react";

export default function TodoForm(props) {
	const [task, setTask] = useState("");

	const handleTaskChange = (e) => {
		setTask(e.target.value);
	};

	const handleTaskKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleButtonClick();
		}
	};

	const handleButtonClick = (e) => {
		props.addTask(task);
		setTask("");
	};

	return (
		<div>
			<input
				value={task}
				type="text"
				name="todo"
				onChange={handleTaskChange}
				onKeyDown={handleTaskKeyDown}
				id="task"
			/>
			<button onClick={handleButtonClick} id="add-task">
				Add
			</button>
		</div>
	);
}
