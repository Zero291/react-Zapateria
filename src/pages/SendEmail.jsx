import React from 'react';
import '../styles/SendEmail.scss';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">El correo fue enviado!</h1>
				<p className="subtitle">Revisa tu bandeja de correo para restablecer tu contraseña.</p>
				<div className="email-image">
					<img src="./icons/email.svg" alt="email" />
				</div>
				<button className="primary-button login-button">Iniciar sesión</button>
				<p className="resend">
					<span>¿No recibiste el correo?</span>
					<a href="/">Reenviar </a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
