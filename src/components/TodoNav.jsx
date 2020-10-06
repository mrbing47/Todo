import React from "react";
import { useState, useEffect } from "react";
import "./css/TodoNav.css";

export default function TodoNav({ email, logout, children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://picsum.photos/id/${Date.now() % 1000}/info`)
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setUser(data);
			});
	}, []);

	// const user = useFetch(url);

	return (
		<div id="todo-nav">
			<div className="nav-user-details">
				<img src={user ? user.download_url : ""} alt="user" id="user-image" />
				<div className="nav-email">{email}</div>
			</div>
			{children}
			<button onClick={() => logout()} id="logout">
				Logout
			</button>
		</div>
	);
}
