export const fetchSaleCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSaleCategories`);

    const data = await res.json()
    const saleCategories = data.saleCategories

    return saleCategories;
};