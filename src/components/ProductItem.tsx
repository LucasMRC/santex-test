import { useEffect } from 'react';
import { useMutation } from "@apollo/client";

// Types
import { FetchedOrder, Item } from "../types";

// Helpers
import { formatPrice } from '../helpers';

// Mutations
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";

// Hooks
import useOrder from '../hooks/useOrder';

export function ProductItem({ item }: { item: Item }) {
    const { updateOrder } = useOrder();
    const [ addItemToOrder, { data, loading }] = useMutation<FetchedOrder>(ADD_ITEM_TO_ORDER);

    useEffect(() => {
        if (!loading && data?.order) {
            const updatedOrder = {
                id: data.order.id,
                subtotal: data.order.subTotal,
                products: data.order.lines.map(({ productVariant, quantity }) => ({
                    id: productVariant.id,
                    name: productVariant.name,
                    price: productVariant.price,
                    quantity
                }))
            };
            updateOrder(updatedOrder);
        }
    }, [ data, loading, updateOrder ]);

    const handleAddItemToOrder = () => {
        addItemToOrder({
            variables: {
                productVariantId: item.variantId,
                quantity: 1
            }
        });
    }

    return (
        <div
            className="card"
        >
            <img
                src={item.pictureLink}
                alt={item.slug}
                className="product-image"
            />
            <div
                className="card-body"
            >
                <div
                    className="card-header"
                >
                    <h5 className="card-title">
                        {item.name}
                    </h5>
                    <h3>
                        {formatPrice(item.price)}
                    </h3>
                </div>
                <p
                    className="card-description"
                >
                    {item.description}
                </p>
            </div>
            <button
                className="buy-button"
                onClick={handleAddItemToOrder}
            >
                Add to chart
            </button>
        </div>
    );
};