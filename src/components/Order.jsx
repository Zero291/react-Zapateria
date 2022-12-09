import React from 'react';
import '../styles/Order.scss';

import Flecha from '@icons/flechita.svg';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articulos</span>
			</p>
			<p>$560.00</p>
			<img src={Flecha} alt="flecha" />
		</div>
	);
}

export default Order;
