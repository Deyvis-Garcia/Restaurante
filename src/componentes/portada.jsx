import React from "react";
import '../estilos/portada.css';
import { FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";
/*imagenes de los productoCard*/
import carne from "../imagenes/carne.png";
import leche from "../imagenes/leche.png";
import licor from "../imagenes/licor.png";
import papas from "../imagenes/papas.png";

const imagenes = {
    carne,
    leche,
    licor,
    papas
};
function Button(cont){
    return(
        <button className="carta_button">{cont.text}</button>
    );
}

function Logo(){
    return (
        <div className="label-container">
          <span>Passion and Flavor</span>
        </div>
    );
}
function Menu (){
    return (
        <div className="menu">
            <ul className="contenedor_menu">
                <li>Todo</li>
                <li>Promociones</li>
                <li>Reserva</li>
            </ul>
            <p className="menu-linea"></p>
        </div>
    );
}
function ProductoCard(card){
    return(
        <div className={card.clase}>
            <h2 className="card_titulo">{card.titulo}</h2>
            <img className="card_imagen" src={imagenes[card.imagen]} alt={card.titulo} />
            <p className="card_descripcion">{card.descripcion}</p>
        </div>
    );
}
function Footer(){
    return(
        <> 
            <div className="contenedor_redes">
                <FaTwitter />
                <FaInstagram />
                <FaTiktok />
            </div>
            <div className="contenedor_derechos">
                <p>¡Pass acepta cualquier pedido sin demoras, prueba nuestras delecias !</p>
                <p className="footer_line"></p>
                <p className="copyrigth">© 2026 Mi tienda. Todos los derechos reservados.</p>
            </div>
            <div className="red_whatsaap">
                <FaWhatsapp />
            </div>
        </>

    );
}
export  {Logo,ProductoCard,Menu,Footer,Button};