import { NavLink } from "react-router-dom";
import "../style/acercade.css";

const AcercaDe = () => {

    return (
        <div>
            <header>
                <h1>Acerca De Nosotros</h1>
                <nav>
                    <NavLink to="/dashboard" id="bt1" className="button">Inicio</NavLink>
                    <a href="#">Contacto</a>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Nuestra Historia</h2>
                    <p>Somos una empresa comprometida con nuestros clientes</p>
                </section>

                <section>
                    <h2>Creador</h2>
                    <p>Conoce a la persona detrás del proyecto</p>
                    <p>Carlos Calleja | creador</p>
                </section>
            </main>
        </div>
    );
};


export default AcercaDe;

