export const fetchGraffitiCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGraffitiCategories`);

    const data = await res.json()
    const graffitiCategories = data.graffitiCategories

    return graffitiCategories;
};