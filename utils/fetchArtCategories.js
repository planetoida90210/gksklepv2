export const fetchArtCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getArtCategories`);

    const data = await res.json()
    const artCategories = data.artCategories

    return artCategories;
};