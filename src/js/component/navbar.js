import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="mb-0 "></span>
				<button type="button" className="btn btn-light mx-5">Contact list</button>
			</Link>
			<div className="mr-3 mb-0 ">
				<Link to="/new-contact">
					<button className="btn p-2 mx-5 btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
