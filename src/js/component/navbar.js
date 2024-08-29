import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/new-contact">
					<button className="btn p-2 btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
