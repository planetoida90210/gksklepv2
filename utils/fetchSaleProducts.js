export const fetchSaleProducts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSaleProducts`
    );
    const data = await res.json();
    const saleProducts = data.saleProducts;

    return saleProducts;
};