import React from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/Zai.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () =>{
    return(
        <nav>
            <img src={menu} alt="menu" className='menu'/>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                <li>
                    <a href="#">Página inicio</a>
                </li>
                <li>
                    <a href="#">Quienes somos</a>
                </li>
                <li>
                    <a href="#">Catálogo</a>
                </li>
                <li>
                    <a href="#">Ubicación</a>
                </li>
                <li>
                    <a href="#">Contáctanos</a>
                </li>
                <li>
                    <a href="#">Mi cuenta</a>
                </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-email">l181080176@gmail.com</li>
                <li className="navbar-shopping-cart">
                    <img src={shoppingCart} alt="shopping cart" />
                    <div>2</div>
                </li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;
