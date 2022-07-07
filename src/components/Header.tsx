import { useEffect, useRef } from 'react';

// Hooks
import useOrder from '../hooks/useOrder';
import useStateWithStorage from '../hooks/useStateWithStorage';

// Helpers
import { formatPrice } from '../helpers/index';

export function Header() {
	const { order } = useOrder();
	const [ subtotal, setSubtotal ] = useStateWithStorage<number>('subtotal', 0);
	const subTotalFromOrder = useRef<number>(order.subtotal);

	useEffect(() => {
		if (order.subtotal !== subTotalFromOrder.current) {
			setSubtotal(order.subtotal);
			subTotalFromOrder.current = order.subtotal;
		}
	}, [ order.subtotal, setSubtotal ]);


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
				{formatPrice(subtotal)}
			</h3>
		</header>
	);
};
