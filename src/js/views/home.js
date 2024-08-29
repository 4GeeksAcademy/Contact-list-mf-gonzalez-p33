import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/contactCars"
import { container } from "webpack";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {
	const {store} = useContext(Context);
	return (
	<div className="text-center mt-5">

		{store.contactList.map ((item,index) => {
			return (
				<ContactCard 
					key={index}
					fullName={item.name}
					address={item.address}
					phone={item.phone}
					email={item.email}
				/> 
			)
		})}
		</div>
	
)};
