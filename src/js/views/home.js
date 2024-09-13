import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Contact from "./cardContact";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mt-5">
			{store.contactList.map((item, index) => {
				return (
					<div className="row mb-4" key={index}>
						<div className="col">
							<Contact
								fullName={item.name}
								address={item.address}
								phone={item.phone}
								email={item.email}
								id={item.id}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
