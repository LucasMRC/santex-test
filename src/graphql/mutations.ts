// Here we put mutations. Remove next line
import {
    gql
} from '@apollo/client';

const ADD_ITEM_TO_ORDER = gql`
    mutation AddItemToOrder(
        $productVariantId: ID!
        $quantity: Int!
    ) {
        order: addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
            ...on Order {
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
        }
    }`

export {
    ADD_ITEM_TO_ORDER
};
