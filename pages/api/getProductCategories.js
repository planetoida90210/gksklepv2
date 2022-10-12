// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "categoryProduct"]{
    _id,
     ...
  }`;


export default async function handler(req, res) {
    const productCategories = await sanityClient.fetch(query);
    console.log(productCategories);
    res.status(200).json({productCategories});
  }
  