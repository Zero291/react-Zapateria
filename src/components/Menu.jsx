import React from 'react';
import '../styles/Menu.scss';

const Menu = () =>{
    return(
        <div className="desktop-menu">
            <ul>
                <li>
                <a href="/" className="title">Mis ordenes</a>
                </li>
                <li>
                <a href="/login">Mi cuenta</a>
                </li>
                <li>
                <a href="/">Cerrar sesión</a>
                </li>
            </ul>
        </div>

    );
}

export default Menu;

