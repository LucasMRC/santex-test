import { useContext } from 'react';

// Context
import { OrderContext } from '../App';

export default function useOrder() {
    const orderContext = useContext(OrderContext);

    if (!orderContext)
        throw new Error('OrderContext should only be used within an context provider');

    return orderContext;
}
