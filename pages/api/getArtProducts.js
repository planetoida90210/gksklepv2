import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";


const query = groq`*[_type == "art"] {
_id,
  ...
} | order(_createdAt asc)`;

export default async function handler(
    req,
    res
  ) {
    const artProducts = await sanityClient.fetch(query);
    res.status(200).json({ artProducts });
  };