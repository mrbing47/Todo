import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from "./Register";
import SignIn from "./SignIn";
import Todo from "./Todo";
import UserContext from "../store/UserContext";
import Actions from "../store/Actions";
import NoMatch from "./NoMatch";

function isUserEmpty(value) {
	return Object.keys(value).length === 0 && value.constructor === Object;
}

export default function App() {
	const context = useContext(UserContext);
	useEffect(() => {
		return context.dispatch(Actions.StoreDate());
	});

	return (
		<Router>
			<Switch>
				<Route path="/register">
					{!isUserEmpty(context.user) && context.user.logged ? <Redirect to="/todos" /> : <Register />}
				</Route>
				<Route exact path="/">
					{!isUserEmpty(context.user) && context.user.logged ? <Redirect to="/todos" /> : <SignIn />}
				</Route>
				<Route path="/todos">
					{!isUserEmpty(context.user) && !context.user.logged ? <Redirect to="/" /> : <Todo />}
				</Route>
				<Route path="/" component={NoMatch} />
			</Switch>
		</Router>
	);
}
