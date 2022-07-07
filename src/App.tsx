import { useMutation } from '@apollo/client';

// Components
import {
	useState,
	createContext,
	Dispatch,
	SetStateAction
} from 'react';

// Components
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ListContainer } from './components/styled';

// Types
import { Order } from './types';

// Mutations
import { CLEAR_CART } from "./graphql/mutations";

export const OrderContext = createContext<{
	order: Order;
	updateOrder: Dispatch<SetStateAction<Order>>;
	clearCart: () => void
}>({
	order: {
		id: '',
		products: [],
		subtotal: 0
	},
	updateOrder: null as unknown as Dispatch<SetStateAction<Order>>,
	clearCart: () => {}
});

function App() {
	const [ order, updateOrder ] = useState<Order>({
		id: '',
		products: [],
		subtotal: 0
	});
	const [ clearCart ] = useMutation(CLEAR_CART);

	const handleClearCart = async () => {
		await clearCart();
		updateOrder(prevState => ({
			...prevState,
			products: [],
			subtotal: 0
		}));
	};

	return (
		<>
			<OrderContext.Provider
				value={{
					order,
					updateOrder,
					clearCart: handleClearCart
				}}
			>
				<Header />
				<ListContainer>
					<ProductList />
				</ListContainer>
			</OrderContext.Provider>
 		</>
	);
}

export default App;
