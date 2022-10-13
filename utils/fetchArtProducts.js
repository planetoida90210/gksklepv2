export const fetchArtProducts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getArtProducts`
    );
    const data = await res.json();
    const artProducts = data.artProducts;

    return artProducts;
};