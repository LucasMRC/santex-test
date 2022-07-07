export type FetchedItem = {
	id: string;
	featuredAsset: {
		preview: string;
	};
	description: string;
	variants: {
		id: string;
		price: number;
	}[];
	slug: string;
    name: string;
};

export type FetchedOrder = {
	order: {
		id: string;
		subTotal: number;
		lines: {
			productVariant: {
				id: string;
				name: string;
				price: number;
			};
			quantity: number;
		}[];
	};
};

export type Item = {
    name: string;
    description: string;
    slug: string;
    pictureLink: string;
    price: number;
    id: string;
	variantId: string;
};

export type Order = {
	id: string;
	products: ProductInOrder[];
	subtotal: number;
};

export type ProductInOrder = {
	id: string;
	name: string;
	price: number;
	quantity: number;
};
