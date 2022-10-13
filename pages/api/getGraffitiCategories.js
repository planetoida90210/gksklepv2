// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "categoryGraffiti"]{
    _id,
     ...
  } | order(_createdAt asc)`;


export default async function handler(req, res) {
    const graffitiCategories = await sanityClient.fetch(query);
    res.status(200).json({graffitiCategories});
  }