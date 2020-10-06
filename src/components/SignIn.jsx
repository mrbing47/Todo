import React from "react";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Actions from "../store/Actions";
import UserContext from "../store/UserContext";
import "./css/SignIn.css";

export default function SignIn() {
	const { user, dispatch } = useContext(UserContext);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	function onSignIn(e) {
		e.preventDefault();

		if (!(email.split("@").length === 2 && email.split("@")[1].split(".").length === 2)) {
			setError("Invalid Email Id.");
			return;
		}

		if (email !== user.email || password !== user.password) {
			setError("Incorrect Credentials");
			return;
		}

		dispatch(Actions.UserLoggedIn());
		history.push("/todos");
	}

	return (
		<div id="signin">
			{error === "" ? "" : <div className="error">{error}</div>}
			<section>
				<label htmlFor="email-signin">Email</label>
				<input
					type="text"
					name="email"
					id="email-signIn"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</section>
			<section>
				<label htmlFor="password-signin">Password</label>
				<input
					type="password"
					name="password"
					id="password-signIn"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</section>
			{/* <div className="button-container-signin"> */}
			<button onClick={onSignIn} className="btns-in-signin">
				Sign In
			</button>

			<div className="create-acc">New? Create an account</div>
			<Link to="/register" className="btns-in-signin">
				Register
			</Link>
			{/* </div> */}
		</div>
	);
}
