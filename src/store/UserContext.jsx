import React, { useReducer } from "react";
import Actions from "./Actions";

const UserContext = React.createContext();

function reducer(state, action) {
	console.log("here => \n\n\n", action);

	switch (action.type) {
		case Actions.StoreDate.type:
			localStorage.setItem("user", JSON.stringify(state));
			return state;
		case Actions.RegisterUser.type:
			return action.payload.user;
		case Actions.UserLoggedIn.type:
			return { ...state, logged: true };
		case Actions.UserLoggedOut.type:
			return { ...state, logged: false };
		case Actions.AddTodo.type:
			return { ...state, todos: [...state.todos, action.payload.todo] };
		case Actions.DeleteTodo.type:
			const deletedTodos = state.todos.filter((e) => action.payload.id !== e.id);
			return { ...state, todos: deletedTodos };
		case Actions.CompleteTodo.type:
			const completeTodos = state.todos.map((e) => {
				if (action.payload.id === e.id) {
					return { ...e, isComplete: true };
				}
				return e;
			});
			return { ...state, todos: completeTodos };
		case Actions.EditTodo.type:
			const editedTodos = state.todos.map((e) => {
				if (action.payload.todo.id === e.id) {
					return action.payload.todo;
				}
				return e;
			});
			return { ...state, todos: editedTodos };
		default:
			return state;
	}
}

function getUser() {
	return JSON.parse(localStorage.getItem("user")) || {};
}

export function Provider({ children }) {
	const [user, dispatch] = useReducer(reducer, {}, getUser);
	return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
}

export default UserContext;
