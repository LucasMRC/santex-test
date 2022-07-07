import { useContext } from 'react';

// Context
import { OrderContext } from '../App';

export default function useOrder() {
    const orderContext = useContext(OrderContext);

    if (!orderContext) 
        throw new Error('OrderContext should only be consummed within an context provider');
    else if (!orderContext.updateOrder) 
        throw new Error('OrderContext should only be consummed within an context provider');

    return orderContext;
}
