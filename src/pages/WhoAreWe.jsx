import React from 'react';s
import '../styles/WhoAreWe.scss'

const WhoAreWe = () =>{
    return(
        <div className="cuerpo">
            <br />
            <h1>Zapatería Zalia</h1>
            <br />
            <h3>Zalia es una empresa Méxicana fundada en 2022.</h3>
            <h3>Nacio de tener calzado de la más alta calidad pero en base a las tendencias del momento.</h3>
            <h3>Teniendo una variedad de calzado para esos momentos en los que quieras dar a relucir tu mejor estilo.</h3>
            <br />
            <img className="logo1" src="./Logos/Zai.svg" alt="Logo" />
            <br /> <br />
            <div style={{display: 'flex'}}>
                <div className="contenido">
                <h3>Misión</h3> <br />
                <h4>
                    Fabricar calzado de calidad en base a las tendencias del momento, asi satisfaciendo las necesidades de nuestros clientes
                    y ser la empresa lider en México.
                </h4>
                </div>
                <div className="contenido">
                <h3>Visión</h3>
                <br />
                <h4>
                    Comercializar calzado juvenil cumpliendo los estándares de calidad para satisfacer las comodidades y estándares de nuestros
                    consumidores a nivel nacional.
                </h4>
                </div>
            </div>
        </div>

    );
}

export default WhoAreWe;