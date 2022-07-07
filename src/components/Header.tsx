import { useEffect, useRef } from 'react';

// Components
import {
	HeaderContainer,
	HeaderImage,
	HeaderSubtotal
} from './styled';

// Hooks
import useOrder from '../hooks/useOrder';
import useStateWithStorage from '../hooks/useStateWithStorage';

// Helpers
import { formatPrice } from '../helpers/index';

export function Header() {
	const { order, clearCart } = useOrder();
	const [ subtotal, setSubtotal ] = useStateWithStorage<number>('subtotal', 0);
	const subTotalFromOrder = useRef<number>(order.subtotal);

	useEffect(() => {
		if (order.subtotal !== subTotalFromOrder.current) {
			setSubtotal(order.subtotal);
			subTotalFromOrder.current = order.subtotal;
		}
	}, [ order.subtotal, setSubtotal ]);

	return (
		<HeaderContainer>
			<HeaderImage
				src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
				alt="logo"
			/>
			<HeaderSubtotal>
				{formatPrice(subtotal)}
			</HeaderSubtotal>
			<button
				style={{ position: 'absolute', right: 0 }}
				onClick={clearCart}
			>
				x
			</button>
		</HeaderContainer>
	);
};