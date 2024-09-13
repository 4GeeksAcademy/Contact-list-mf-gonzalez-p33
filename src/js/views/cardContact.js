import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";


const Contact = ({fullName, address, phone, email, id}) => {
    const { store,actions } = useContext(Context);
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/edit-contact/${id}`);
    };

    const Delete = () => {
        actions.deleteContact(id);
    };
    
    return (
          
        <div className="card col-10 mb-3 p-2 row ">

            <div className="card-body d-flex align-items-center g-2 ">

                    <img className= " rounded-circle  mx-5 my-2"
                    src= "https://images.hellomagazine.com/horizon/square/9029b22f24b4-taylor-swift-eras-tour-charity-work-over-the-years-t.jpg"
                    style={{ width: "150px", height: "150px" }}
                    />
                
                <div className=" text-start ms-3 "> 
                    <div className="card-title fw-bold fs-3"> {fullName} </div>
                    <div className="fw-bold text-secondary"> <i className="fa-solid fa-phone"></i> {phone} </div>
                    <div className="fw-bold text-secondary"> <i className="fa-solid fa-location-dot"></i> {address} </div>
                    <div className="fw-bold text-secondary"> <i className="fa-solid fa-envelope"></i> {email} </div>
                </div>

            

                <div className= " d-flex justify-content-center align-items-center "> 
                    <div className="ms-3 d-flex  justify-content-star">
                        <button onClick={handleEditClick} className="btn btn-light ">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>

                    <div className="col-1 d-flex m-3 justify-content-start ps-0 ">
                    <button onClick={()=> {Delete(id)}} className="btn btn-light" >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    </div>
                </div>

                </div>
        </div>

    );

};

export default Contact;