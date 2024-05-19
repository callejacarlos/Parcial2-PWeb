import "../style/catalogo.css";
import Dashboard from "../Dashboard";
import React from "react";

const Catalogo = () => {
    return (
            <div className="catalogo">
                <div className="items-container">
                <Dashboard />
                <ul>
                    <img src="https://s1.eestatic.com/2018/06/07/actualidad/actualidad_313234074_130230320_1706x960.jpg" alt="Imagen memoria ram" width="350px"/>
                    <li>Memoria Ram</li>
                </ul>
                <ul>
                    <img src="https://i.blogs.es/7ebda1/samsung-spinpoint-mt2-1tb/1366_2000.jpg" alt="Imagen de disco duro mecanico" width="280px" />
                    <li>Disco Duro HDD</li>
                </ul>
                <ul>
                    <img src="https://www.audiovisualesdecolombia.com/wp-content/uploads/2020/04/Disco-Duro-Estado-Solido-Ssd-Western-Wd-Green-240gb-2.5%C2%A8Sata-3D.jpg" alt="Imagen de disco duro solido" width="270px" />
                    <li>Disco Duro SSD</li>
                </ul>
                <ul>
                    <img src="https://hardzone.es/app/uploads-hardzone.es/2018/03/GPU-vs-tarjeta-gr%C3%A1fica-edit-930x487.jpg" alt="Imagen de tarjeta grafica" width="350px" />
                    <li>tarjeta grafica</li>
                </ul>
                <ul>
                    <img src="https://www.profesionalreview.com/wp-content/uploads/2018/10/Tipos-de-torres-chasis-o-cajas-para-PC-2.jpg" alt="Imagen de torre" width="270px"/>
                    <li>Torre</li>
                </ul>
                <ul>
                    <img src="https://images.adsttc.com/media/images/55e6/7714/8450/b5e7/a600/08f4/newsletter/procesadores.jpg?1441167119" alt="Imagen de procesador" width="350px" />
                    <li>Procesador</li>
                </ul>
                </div>
            </div>
    );
};


export default Catalogo; 
 

