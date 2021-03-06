import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

// Queries
import { GET_PRODUCTS } from '../graphql/queries';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';

// Components
import { ProductItem } from './ProductItem';
import { Modal } from './Modal';
import { Skeleton } from './Skeleton';

// Types
import { Item, FetchedOrder } from '../types';

// Helpers
import { parseItems, parseOrder } from '../helpers';

// Hooks
import useOrder from '../hooks/useOrder';

export function ProductList() {
	const { error, data, loading } = useQuery(GET_PRODUCTS);
	const [ productOnDisplay, setProductOnDisplay ] = useState<Item>();
	const [ items, setItems ] = useState<Item[]>([]);
    const [ addItemToOrder, { data: dataFromOrder, loading: loadingFromOrder }] = useMutation<FetchedOrder>(ADD_ITEM_TO_ORDER);
    const { updateOrder } = useOrder();

    useEffect(() => {
        if (!loadingFromOrder && dataFromOrder?.order) {
			const parsedOrder = parseOrder(dataFromOrder);
            updateOrder(parsedOrder);
        }
    }, [ dataFromOrder, loadingFromOrder, updateOrder ]);


	useEffect(() => {
		if (!loading) {
			const parsedItems = parseItems(data);
			setItems(parsedItems);
		}
	}, [ data, loading ]);

    const handleAddItemToOrder = (item: Item) => {
        addItemToOrder({
            variables: {
                productVariantId: item.variantId,
                quantity: 1
            }
        });
    };

	const handleScreen = () => {
		if (loading) {
			return (
				<Skeleton />
			);
		} else if (error) {
			return (
				<>
					{`Something went wrong: ${error.message}`}
				</>
			);
		}
		return items.map((item: Item) => (
			<ProductItem
				key={item.id}
				item={item}
				openModal={() => setProductOnDisplay(item)}
			/>
		));
	}

	return (
		<>
			{handleScreen()}
			{ productOnDisplay && (
				<Modal
					item={productOnDisplay}
					closeModal={() => setProductOnDisplay(undefined)}
					addItemToOrder={handleAddItemToOrder}
				/>
			)}
		</>
	);
}
