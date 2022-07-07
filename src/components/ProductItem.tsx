import { useEffect } from 'react';
import { useMutation } from "@apollo/client";

// Types
import { FetchedOrder, Item } from "../types";

// Helpers
import { parseOrder, formatPrice } from '../helpers';

// Mutations
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";

// Hooks
import useOrder from '../hooks/useOrder';

export function ProductItem({ item }: { item: Item }) {
    const { updateOrder } = useOrder();
    const [ addItemToOrder, { data, loading }] = useMutation<FetchedOrder>(ADD_ITEM_TO_ORDER);

    useEffect(() => {
        if (!loading && data?.order) {
            updateOrder(parseOrder(data));
        }
    }, [ data, loading, updateOrder ]);

    const handleAddItemToOrder = () => {
        addItemToOrder({
            variables: {
                productVariantId: item.variantId,
                quantity: 1
            }
        });
    };

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
                    role="contentinfo"
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