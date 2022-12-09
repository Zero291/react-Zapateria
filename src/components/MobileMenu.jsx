import React, { useContext } from "react";
import '../styles/MobileMenu.scss';
import close from '@icons/icon_close.png'


const MobileMenu = () =>{
    return(
    <div className="mobile-menu">
        <ul className="categories">
            <li>
            <a href="#">Página de inicio</a>
            </li>
            <li>
            <a href="/">Quienes somos</a>
            </li>
            <li>
            <a href="/">Catálogo</a>
            </li>
            <li>
            <a href="/">Ubicación</a>
            </li>
            <li>
            <a href="/">Contáctanos</a>
            </li>
        </ul>
        <ul>
            <li>
            <a href="/" className="title">Mis ordenes</a>
            </li>
            <li>
            <a href="/">Mi cuenta</a>
            </li>
        </ul>
        <ul>
            <li>
            <a href="/" className="email">axelr.291@gmail.com</a>
            </li>
            <li>
            <a href="/" className="sign-out">Cerrar sesión</a>
            </li>
        </ul>
    </div>

    );
}

export default MobileMenu;
