import React, { useState, useContext } from "react";
import { useNavigate, Link, useParams  } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    let { id } = useParams();
    const [newContact, setNewContact] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(newContact,id); 
        //navigate("/");//
    };

    return (
        <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newContact.name} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={newContact.address} onChange={handleChange}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Phone Number </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={newContact.phone} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={newContact.email} onChange={handleChange}
                    />
                </div> 

                <button className="btn btn-primary w-100" type="submit">
                    Save changes
                </button>
            </form>
            <Link to="/">
                <p className="mb-0">ClicK here to go back to contacts! </p>
            </Link>
        </div>
    );
};

export default EditContact;
    


