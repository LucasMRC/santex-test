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

// Types
import { Order } from './types';

export const OrderContext = createContext<{
	order: Order;
	updateOrder: Dispatch<SetStateAction<Order>>;
}>({
	order: {
		id: '',
		products: [],
		subtotal: 0
	},
	updateOrder: null as unknown as Dispatch<SetStateAction<Order>>
});

function App() {
	const [ order, updateOrder ] = useState<Order>({
		id: '',
		products: [],
		subtotal: 0
	});

	return (
		<>
			<OrderContext.Provider
				value={{
					order,
					updateOrder
				}}
			>
				<Header />
				<div
					className="list-container"
				>
					<ProductList />
				</div>
			</OrderContext.Provider>

			{/* ======================= */}
			{/* ===== List Styles ===== */}
			{/* ======================= */}
			<style>
				{`
					.list-container {
						display: flex;
						flex-wrap: wrap;
					}

					.card {
						width: 300px;
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 10px;
						border-radius: 10px;
						border: 1px solid #ccc;
						margin: 10px 10px;
						box-shadow: 1px 1px 1px #000;
						transition: filter ease 1s;
						background: #ddd;
					}

					.card:hover {
						filter: brightness(1.1);
					}

					.product-image {
						width: 100%;
						height: 250px;
					}

					.card-header {
						display: flex;
						justify-content: space-between;
					}

					.card-description {
						font-size: 14px;
					}

				`}
			</style>
			{/* ======================= */}
			{/* ======================= */}
			{/* ======================= */}
 		</>
	);
}

export default App;
