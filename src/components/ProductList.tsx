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
import { FetchedItem, Item } from '../types';

export function ProductList() {
	const { error, data, loading } = useQuery(GET_PRODUCTS);
	const [ items, setItems ] = useState<Item[]>([]);

	useEffect(() => {
		if (!loading)
			setItems(data.products.items.map((item: FetchedItem) => ({
				name: item.name,
				slug: item.slug,
				description: item.description,
				price: item.variants[0].price,
				pictureLink: item.featuredAsset.preview,
				id: item.id,
				variantId: item.variants[0].id // needed to update the order
			} as Item)));
	}, [ data?.products.items, loading ]);

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
