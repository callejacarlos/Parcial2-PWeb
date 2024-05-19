import { useState } from "react";
import { useAuth } from "./AuthProvider";
import "./style/Login.css";

const Login = () => {


    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const [mensaje, setMensaje] = useState("");
    const auth = useAuth();
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
            try {
                auth.loginAction(input);
            } catch (error) {
                setMensaje(error.message);
            }
            return;
        }
        alert("El usuario y la contraseña es obligatorio");
    };
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <div style={{ color: "red" }}>{mensaje}</div>
                <div className="cont">
                    <h1>INICIAR SESION</h1>
                    <form onSubmit={handleSubmitEvent}>
                        <div className="form_control">
                            <label className="user" htmlFor="user-name">Usuario:      </label>
                            <input
                                type="text"
                                id="user-name"
                                name="username"
                                aria-describedby="user-name"
                                aria-invalid="false"
                                onChange={handleInput}
                            />
                            <div id="user-name" className="sr-only">
                                Por favor ingrese un nombre de usuario válido (mínimo 6 caracteres).
                            </div>
                        </div> <br />
                        <div className="form_control">
                            <label className="pass" htmlFor="password">Contraseña:       </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                aria-describedby="user-password"
                                aria-invalid="false"
                                onChange={handleInput}
                            />
                            <div id="user-password" className="sr-only">
                                Por favor ingrese una contraseña válida (mínimo 6 caracteres).
                            </div>
                        </div>
                        <br /><br />
                        <button className="btn-submit">Iniciar sesión</button>
                        
                    </form>
                </div>
        </>
    );
};


export default Login;


