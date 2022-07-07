// Here we put queries. Remove next line
import {
    gql
} from '@apollo/client';

const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            items {
                id
                featuredAsset {
                    preview
                }
                description
                slug
                name
                variants {
                    id
                    price
                }
            }
        }
    }`

export {
    GET_PRODUCTS
};
