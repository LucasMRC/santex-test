import { MockedResponse } from "@apollo/client/testing";
import { GET_PRODUCTS } from "../graphql/queries";
import { FetchedItem } from "../types";

const mocks: MockedResponse<Record<string, any>>[] = [{
    request: {
        query: GET_PRODUCTS
    },
    result: {
        data: {
            products: {
                items: [
                    {
                        id: '1',
                        featuredAsset: {
                            preview: ''
                        },
                        description: 'This is a description',
                        slug: 'This is used as an alt text',
                        name: 'Super product',
                        variants: [
                            {
                                id: '1',
                                price: 1000
                            }
                        ]
                    }
                ]
            }
        }
    }
}];

export const fetchedItem = {
    data: {
        products: {
            items: [
                {
                    id: '1',
                    featuredAsset: {
                        preview: ''
                    },
                    description: 'This is a description',
                    slug: 'This is used as an alt text',
                    name: 'Super product',
                    variants: [
                        {
                            id: '1',
                            price: 1000
                        }
                    ]
                } as FetchedItem
            ]
        }
    }
};

export default mocks;