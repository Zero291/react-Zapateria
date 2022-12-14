import React, {useRef} from 'react';
import '../styles/Login.scss';

import Logo from '@logos/Zai.svg';

const Login = ( ) => {
    const form = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data ={
            username: formData.get('email'),
            password: formData.get('password') 
        }
        console.log(data);
    }

    return(
        <div className="Login">
            <div className="form-container">
                <img src={Logo} alt="Logo de Yard Sale" className="logo" />
                <form action="/" className="form" ref={form}>
                <label htmlFor="Email" className="label">Correo</label>
                <input type="email" name="email" placeholder="axelr.291@gmail.com" className="input input-email" />
                <label htmlFor="password" className="label">Contraseña</label>
                <input type="password" name="password" placeholder="*********" className="input input-password" />
                <button type="submit" className="primary-button login-button" onClick={handleSubmit} >
                Iniciar sesión
                </button>
                <a href="/password-recovery" className="forgot">Olvide mi contraseña</a>
                </form>
                <button 
                className="secondary-button signup-button"> 
                    <a href="/signup">Crear cuenta</a>
                </button>
            </div>
        </div>

    );
}

export default Login;
