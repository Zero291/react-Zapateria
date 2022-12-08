import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
	return (
		<>
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bicicleta</p>
				<p>Excelente para recorrer toda la ciudad en dos ruedas uwu</p>
				<button className="primary-button add-to-cart-button">
					<img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
					Añadir al carrito.
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
