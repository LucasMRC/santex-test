import { useEffect } from 'react';
import { useMutation } from "@apollo/client";

// Components
import {
    Card,
    CardBody,
    CardHeader,
    CardImage,
    CardContent,
    CardButton,
    CardPrice,
    CardTitle
} from './styled';

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
        console.log({ loading, data });
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
        <Card>
            <CardImage
                src={item.pictureLink}
                alt={item.slug}
            />
            <CardBody>
                <CardHeader>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    <CardPrice>
                        {formatPrice(item.price)}
                    </CardPrice>
                </CardHeader>
                <CardContent
                    role="contentinfo"
                >
                    {item.description}
                </CardContent>
            </CardBody>
            <CardButton
                onClick={handleAddItemToOrder}
            >
                Add to chart
            </CardButton>
        </Card>
    );
};