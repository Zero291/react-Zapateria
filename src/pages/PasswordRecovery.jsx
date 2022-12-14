import React from 'react';
import '../styles/PasswordRecovery.scss';

import Logo from '@logos/Zai.svg';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={Logo} alt="logo" className="logo" />
				<h1 className="title">Recuperar contraseña</h1>
				<p className="subtitle">Introduce el correo utilizado para recibir un correo de recuperar contraseña</p>
				<form action="/send-email" className="form">
					<label htmlFor="email" className="label">Correo electronico</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirmar" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
