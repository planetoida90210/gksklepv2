// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "categorySale"]{
    _id,
     ...
  }`;


export default async function handler(req, res) {
    const saleCategories = await sanityClient.fetch(query);
    res.status(200).json({saleCategories});
  }