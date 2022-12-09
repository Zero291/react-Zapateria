import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

import Flecha from '@icons/flechita.svg';

const MyOrder = () => {
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={Flecha} alt="arrow" />
				<p className="title">Mi orden</p>
			</div>
			<div className="my-order-content">
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Pagar
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
