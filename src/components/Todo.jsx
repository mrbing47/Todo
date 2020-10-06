import React from "react";
import { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import UserContext from "../store/UserContext";
import Actions from "../store/Actions";
import TodoNav from "./TodoNav";
import "./css/Todo.css";

export default function Todo() {
	const { user, dispatch } = useContext(UserContext);

	const addTask = (task) => {
		if (task === "") return;

		dispatch(
			Actions.AddTodo({
				todo: {
					task: task,
					id: Date.now(),
					isCompleted: false,
					description: "",
				},
			})
		);
	};

	const deleteTask = (id) => {
		dispatch(
			Actions.DeleteTodo({
				id,
			})
		);
	};

	const editTask = (todo) => {
		dispatch(
			Actions.EditTodo({
				todo,
			})
		);
	};

	const logout = () => {
		dispatch(Actions.UserLoggedOut());
	};

	return (
		<div id="todo">
			<TodoNav email={user.email} logout={logout}>
				<TodoForm todos={user.todos} addTask={addTask} />
			</TodoNav>
			<TodoList todos={user.todos} deleteTask={deleteTask} editTask={editTask} />
		</div>
	);
}
