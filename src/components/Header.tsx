import { useEffect, useRef } from 'react';

// Components
import {
	HeaderContainer,
	HeaderImage,
	HeaderButton,
	HeaderOrderInfo,
	HeaderSubtotal,
	HeaderTotalItems
} from './styled';

// Hooks
import useOrder from '../hooks/useOrder';
import useStateWithStorage from '../hooks/useStateWithStorage';

// Helpers
import { formatPrice } from '../helpers';

export function Header() {
	const { order, clearCart } = useOrder();
	const [ subtotal, setSubtotal ] = useStateWithStorage<number>('subtotal', 0);
	const [ totalItems, setTotalItems ] = useStateWithStorage<number>('totalItems', 0);
	const subTotalFromOrder = useRef<number>(order.subtotal);

	useEffect(() => {
		if (order.subtotal !== subTotalFromOrder.current) {
			const quantity = order.products.reduce((acc, product) => {
				acc += product.quantity;
				return acc;
			}, 0);
			setSubtotal(order.subtotal);
			setTotalItems(quantity);
			subTotalFromOrder.current = order.subtotal;
		}
	}, [
		order.products,
		order.subtotal,
		setSubtotal,
		setTotalItems
	]);

	return (
		<HeaderContainer>
			<HeaderImage
				src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
				alt="logo"
			/>
			<HeaderOrderInfo>
				<HeaderSubtotal>
					{!!totalItems ? formatPrice(subtotal) : '\xa0'}
				</HeaderSubtotal>
				<HeaderTotalItems>
					{!!totalItems
						? `${totalItems} item${totalItems === 1 ? '' : 's'} in cart`
						: 'Start adding items to the cart'
					}
				</HeaderTotalItems>
				{ !totalItems ? (
					<>&nbsp;</>
				) : (
					<HeaderButton
						onClick={clearCart}
					>
						Clear cart
					</HeaderButton>
				)}
			</HeaderOrderInfo>
		</HeaderContainer>
	);
};