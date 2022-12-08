import React from 'react';
import '../styles/Login.scss';

const Login = ( ) => {
    return(
        <div className="login">
            <div className="form-container">
                <img src="./Logos/logo_yard_sale.svg" alt="Logo de Yard Sale" className="logo" />
                <form action="/" className="form">
                <label htmlFor="Email" className="label">Correo</label>
                <input type="email" id="Email" placeholder="axelr.291@gmail.com" className="input input-email" />
                <label htmlFor="password" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="**********" className="input input-password" />
                <input type="submit" className="primary-button login-button" defaultValue="Iniciar sesión" />
                <a href="/" className="forgot">Olvide mi contraseña</a>
                </form>
                <button className="secondary-button signup-button">Crear cuenta login</button>
            </div>
        </div>

    );
}

export default Login;
