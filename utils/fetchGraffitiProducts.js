export const fetchGraffitiProducts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getGraffitiProducts`
    );
    const data = await res.json();
    const graffitiProducts = data.graffitiProducts;

    return graffitiProducts;
};