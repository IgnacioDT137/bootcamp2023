import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [correo, setCorreo] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()

    const verDatos = (e) => {
        console.log(correo);
        console.log(pwd);
        if (correo != "ign.diaz@duocuc.cl" || pwd != "123") {
            alert("Datos incorrectos")
            return
        }
        alert("Bienvenido")
        navigate("/calendario")
    }

    return (
        <div className="row row-cols-1">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center">DUOC UC</h1>
                        <form>
                            <div className="form-group mb-3">
                                <label>Correo Alumno:</label>
                                <input type="text" name="user" className="form-control" placeholder="Correo Alumno" required value={correo} onChange={(e) => {setCorreo(e.target.value)}}/>
                            </div>
                            <div className="form-group mb-3">
                                <label>Contraseña:</label>
                                <input type="password" name="pwd" className="form-control" placeholder="Contraseña" required value={pwd} onChange={(e) => {setPwd(e.target.value)}}/>
                            </div>
                            <button className="btn btn-primary" onClick={(e) => {verDatos(e)}}>Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login