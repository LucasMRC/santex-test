import {
    FetchedItem,
    FetchedOrder,
    Item,
    Order
} from "../types";

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
    const [ dollars, cents ] = formatter.format(price).split('.');
    return (
        <>
            {dollars}
            <sup>{cents}</sup>
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

export const parseOrder = ({ order }: FetchedOrder): Order => {
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