import React, { useState, useContext, useEffect, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const FormularioNuevoContacto = () => {
    const { store,actions } = useContext(Context);

    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.FormularioNuevoContacto(contact)
        navigate("/");
    };



    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-10">

                    <h1>Contact Form</h1>

                    <form className= "p-3" onSubmit= { handleSubmit } >
                       
                        <div className="form-group mb-3">
                            <label>Full Name</label> <input type="text" className="form-control" value={contact.name} 
                                onChange={
                                    (event) => setContact({...contact,name: event.target.value})
                                } />
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Address</label>
                            <input type="text" className="form-control" alue={contact.address}
                                onChange={
                                    (event) => setContact({...contact,address: event.target.value})
                                } />
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" value={contact.phone}
                                onChange={
                                    (event) => setContact({...contact,phone: event.target.value})
                                }/>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" vale={contact.email}
                                onChange={(event) => setContact({...contact,email: event.target.value})
                                } />
                        </div>
                        
                        <button type="submit" className=" col-12 btn btn-primary mb-5" >
                            Save Contact

                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );

}

export default FormularioNuevoContacto;
