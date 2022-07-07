// Hooks
import useOrder from '../hooks/useOrder';
// import useStateWithStorage from '../hooks/useStateWithStorage';

// Helpers
import { formatPrice } from '../helpers/index';
// import { useEffect } from 'react';

export function Header() {
	const { order } = useOrder();
	// const { storage, updateStorage } = useStateWithStorage();

	// useEffect(() => {
	// 	if (order.subtotal !== 0)
	// 	updateStorage("subtotal", order.subtotal);
	// }, [order, updateStorage]);

	return (
		<header
			style={{
				background: 'red',
				marginBlockEnd: 50,
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px'
			}}
		>
			<img
				src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
				alt="logo"
			/>
			<h3>
				{formatPrice(order.subtotal)}
			</h3>
		</header>
	);
}
