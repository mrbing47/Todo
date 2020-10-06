import React from "react";
import { useState, useContext } from "react";
import UserContext from "../store/UserContext";
import Actions from "../store/Actions";
import { Link, useHistory } from "react-router-dom";
import "./css/Register.css";

export default function Register() {
	const history = useHistory();
	const { dispatch } = useContext(UserContext);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPass, setConfPass] = useState("");

	const onRegister = (e) => {
		e.preventDefault();
		if (!(email.split("@").length === 2 && email.split("@")[1].split(".").length === 2)) {
			console.log("error");
			setError("Invalid Email Id.");
			return;
		}

		if (password !== confPass) {
			console.log("error");
			setError("Password does not match.");
			return;
		}

		console.log("onregister");

		dispatch(
			Actions.RegisterUser({
				user: {
					email,
					password,
					logged: true,
					todos: [],
				},
			})
		);

		history.push("/todos");
	};

	return (
		<div id="register">
			<div className="error">{error}</div>
			<section>
				<label htmlFor="email-reg">Email</label>
				<input
					type="email"
					name="email"
					id="email-reg"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</section>
			<section>
				<label htmlFor="password-reg">Password</label>
				<input
					type="password"
					name="password"
					id="password-reg"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</section>
			<section>
				<label htmlFor="conf-pass-reg">Confirm Password</label>
				<input
					type="password"
					name="confirm-password"
					id="conf-pass-reg"
					value={confPass}
					onChange={(e) => setConfPass(e.target.value)}
					required
				/>
			</section>
			<button onClick={onRegister} className="btns-in-signin">
				Register
			</button>
			<div className="already-acc">Already Registered?</div>
			<Link to="/" className="btns-in-signin">
				Sign In
			</Link>
		</div>
	);
}
