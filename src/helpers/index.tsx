import { FetchedItem, FetchedOrder, Item } from "../types";

type FetchedItemResponse = {
    products: {
        items: FetchedItem[];
    };
};

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatPrice = (price: number) => {
    return (
        <>
            {formatter.format(price).split('.')[0]}
            <sup>00</sup>
        </>
    );
};

export const parseItems = ({ products: { items }}: FetchedItemResponse) =>
    items.map((item: FetchedItem) => ({
        name: item.name,
        slug: item.slug,
        description: item.description,
        price: item.variants[0].price,
        pictureLink: item.featuredAsset.preview,
        id: item.id,
        variantId: item.variants[0].id // needed to update the order
    } as Item));

export const parseOrder = ({ order }: FetchedOrder) => {
    return {
        id: order.id,
        subtotal: order.subTotal,
        products: order.lines.map(({ productVariant, quantity }) => ({
            id: productVariant.id,
            name: productVariant.name,
            price: productVariant.price,
            quantity
        }))
    };
};