import React, { useContext } from "react";
import '../styles/MobileMenu.scss';
import close from '@icons/icon_close.png'


const MobileMenu = () =>{
    return(
    <div className="mobile-menu">
        <ul className="categories">
            <li>
            <a href="/home">Página de inicio</a>
            </li>
            <li>
            <a href="/who-are-we">Quienes somos</a>
            </li>
            <li>
            <a href="/catalogo">Catálogo</a>
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
