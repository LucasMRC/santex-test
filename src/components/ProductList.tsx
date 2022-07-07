import { useEffect, useState } from 'react';
import {
	useQuery
} from '@apollo/client';

// Queries
import { GET_PRODUCTS } from '../graphql/queries';

// Components
import { ProductItem } from './ProductItem';
import { Spinner } from './Spinner';

// Types
import { Item } from '../types';

// Helpers
import { parseItems } from '../helpers';

export function ProductList() {
	const { error, data, loading } = useQuery(GET_PRODUCTS);
	const [ items, setItems ] = useState<Item[]>([]);

	useEffect(() => {
		if (!loading)
			setItems(parseItems(data));
	}, [ data, loading ]);

	const handleScreen = () => {
		return loading
			? <Spinner />
			: error
				? alert('Something went wrong: ' + error.message)
				: items.map((item: Item) => (
					<ProductItem
						key={item.id}
						item={item}
					/>
				))
	}

	return (
		<>
			{handleScreen()}
		</>
	);
}
