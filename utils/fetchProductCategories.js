export const fetchProductCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProductCategories`);

    const data = await res.json()
}