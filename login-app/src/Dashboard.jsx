import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./style/Dashboard.css";

const Dashboard = () => {
    const auth = useAuth();
    return (
            <nav className="conten">
                <h1 className="component">VENTA DE COMPONENTES PARA PC</h1>
                <h3>Bienvenido! {auth.user}</h3>
                <br/><br/>
                <li className="lista">
                    <li><NavLink to="/dashboard" id="bt1" className="button">Inicio</NavLink></li>
                    <li><NavLink to="/Catalogos" id="bt2" className="button">Catalogo</NavLink></li>

                    <li><NavLink to="/Acercade" id="bt3" className="button">Acerca De</NavLink></li>
                    <li><NavLink to="/Contacto" id="bt4" className="button">Contacto</NavLink></li>
                </li>
                
                <button onClick={() => auth.logOut()} id="cerrar" className="btn-submit">
                    Cerrar sesión
                </button>
            </nav>
    );
};


export default Dashboard; 
 