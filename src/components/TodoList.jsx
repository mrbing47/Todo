import React from "react";
import TodoItem from "./TodoItem";
import "./css/TodoList.css";

function TodoList({ todos, deleteTask, editTask }) {
	return (
		<div id="todo-list">
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} deleteTask={deleteTask} editTask={editTask} />
			))}
		</div>
	);
}

export default TodoList;
