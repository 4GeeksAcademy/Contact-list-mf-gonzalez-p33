import { HotUpdateChunk } from "webpack";
import FormularioNuevoContacto from '../views/formulario.js';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[ ],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async () => {
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/agendamafer",{
					method: "GET",
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
			},

			FormularioNuevoContacto : async (contact) => {
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/agendamafer/contacts",{
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
				const data = await response.json();
				getActions().loadContacts();
			},

			updateContact: async (updatedContact,id) => {
				try {
					console.log(id,updatedContact)
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendamafer/contacts/${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(updatedContact)
					});

					if (response.ok) getActions().fetchContactos();
				} catch (error) {
					console.error(error);
				}

			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendamafer/contacts/${id}`, {
						method: 'DELETE',
					})
					getActions().loadContacts()
					} catch (error) {
					console.log(error)
					alert("Error deleting contact")
				}
			}, 

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
