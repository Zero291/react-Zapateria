import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/Zai.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () =>{
    const [toggle, setToggle]= useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    const handleToggleOrders = () => { setToggleOrders(); };

    return(
        <nav>
            <img src={menu} alt="menu" className='menu' onClick={() => setToggleMenu(!toggleMenu)} />
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
                <li className="navbar-email" onClick={ handleToggle}>
                    l181080176@gmail.com
                </li>
                <li 
                    className="navbar-shopping-cart" 
                    onClick={() => setToggleOrders(!toggleOrders)} 
                >
                    <img src={shoppingCart} alt="shopping cart" />
                    { state.cart.length >0 ? <div>{state.cart.length}</div> : null }
                </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
            {toggleOrders && <MobileMenu />}
        </nav>

    );
}

export default Header;
