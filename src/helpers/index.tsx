const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatPrice = (price: number) => {
    return (
        <>
            {formatter.format(price).split('.')[0]}
            <sup>00</sup>
        </>
    );
}
