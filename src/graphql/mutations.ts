// Here we put mutations. Remove next line
import {
    gql
} from '@apollo/client';

const ACTIVE_ORDER = gql`
    fragment ActiveOrder on Order {
        id
        subTotal
        lines {
            productVariant {
                id
                name
                price
            }
            quantity
        }
    }
`;

const ADD_ITEM_TO_ORDER = gql`
    ${ACTIVE_ORDER}
    mutation addItemToOrder(
        $productVariantId: ID!
        $quantity: Int!
    ) {
        order: addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
            ...ActiveOrder
        }
    }`;

const CLEAR_CART = gql`
    mutation removeAllOrderLines {
        order: removeAllOrderLines {
            ...on Order {
                id
            }
        }
    }
    `;

export {
    ADD_ITEM_TO_ORDER,
    CLEAR_CART
};
