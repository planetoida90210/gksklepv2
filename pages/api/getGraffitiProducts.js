import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";


const query = groq`*[_type == "graffiti"] {
_id,
  ...
} | order(_createdAt asc)`;

export default async function handler(
    req,
    res
  ) {
    const graffitiProducts = await sanityClient.fetch(query);
    res.status(200).json({ graffitiProducts });
  };