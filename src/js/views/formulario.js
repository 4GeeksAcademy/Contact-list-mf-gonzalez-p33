import React from "react";

const FormularioNuevoContacto = () => {
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <h1>Formulario de contacto</h1>
                    <form className= "p-3">
                        <div className="form-group mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label>Dirección</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label>Teléfono</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <button type="submit" className=" col-12 btn btn-primary mb-5">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default FormularioNuevoContacto;
