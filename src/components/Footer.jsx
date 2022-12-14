import React from 'react';
import '../styles/Footer.scss';

import Facebook from '@icons/FbIcon.png';
import Instagram from '@icons/InstaIcon.png';
import WhatsApp from '@icons/WhaIcon.png';

const Footer = () =>{
    return(
        <div className="footer-basic">
            <footer>
                <hr style={{backgroundColor: 'aquamarine'}} />
                <br />
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/home">Página inicio</a></li>
                    <li className="list-inline-item"><a href="/who-are-we">Quienes somos</a></li>
                    <li className="list-inline-item"><a href="/">Catálogo</a></li>
                    <li className="list-inline-item"><a href="#"></a></li>
                    <li className="list-inline-item"><a href="#" /></li>
                    <li className="list-inline-item"><a href="#"></a></li>
                    <li className="list-inline-item"><a href="#" /></li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/profile.php?id=100087983379808"><img style={{height: 35, width: 35}} src={Facebook} alt="FacebookIcon" /></a>
                        <a href="https://www.instagram.com/zalia.10/"><img style={{height: 35, width: 35}} src={Instagram} alt="InstagramIcon" /></a>
                        <a href="https://wa.link/bmd6aj"><img style={{height: 35, width: 35}} src={WhatsApp} alt="WhatsAppIcon" /></a>
                    </li>
                    <li className="list-inline-item"><a href="#" /></li>
                </ul>
                <p className="copyright">Zalia Zapateria © 2022</p>
            </footer>
        </div>

    );
}

export default Footer;