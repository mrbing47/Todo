function createAction(action) {
	return {
		[action]: function (payload) {
			this.type = action;

			return {
				type: action,
				payload,
			};
		},
		extend() {
			this[action].type = action;
			this[action].toString = () => action;

			return this[action];
		},
	}.extend();
}

export default {
	StoreDate: createAction("StoreDate"),
	RegisterUser: createAction("RegisterUser"),
	UserLoggedIn: createAction("UserLoggedIn"),
	UserLoggedOut: createAction("UserLoggedOut"),
	AddTodo: createAction("AddTodo"),
	DeleteTodo: createAction("DeleteTodo"),
	CompleteTodo: createAction("CompleteTodo"),
	EditTodo: createAction("EditTodo"),
};
