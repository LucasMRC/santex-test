import { MockedResponse } from "@apollo/client/testing";
import { GET_PRODUCTS } from "../graphql/queries";

const mocks: MockedResponse<Record<string, any>>[] = [{
    request: {
        query: GET_PRODUCTS
    },
    result: {
        data: {
            products: {
                items: [
                    {
                        id: 1,
                        featuredAsset: {
                            preview: ''
                        },
                        description: 'This is a description',
                        slug: 'This is used as an alt text',
                        name: '',
                        variants: [
                            {
                                id: 1,
                                price: 1000
                            }
                        ]
                    }
                ]
            }
        }
    }
}];

export default mocks;