import Image from 'next/image';
import React from 'react'
import { fetchSaleProducts } from '../../utils/fetchSaleProducts';
import { sanityClient, urlFor } from '../../sanity';


const ProductDetails = ({product}) => {
  return (
    <div className="w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-8 flex">
      <div className="flex gap-[40px] p-[40px] pt-[60px]">
        <div className="flex-col">
          <div className="relative flex w-[450px] h-[450px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
            <Image src={urlFor(product?.image[0]).url()} layout="fill" objectFit="contain"/>
          </div>
        </div>  
      </div>
    </div>
  )
}

// backend code
export const getStaticPaths = async () => {
    const products = await fetchSaleProducts();
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current,
      }
    }));
    return {
      paths,
      fallback: 'blocking'
    }
  };

  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "sale" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(query)

    return {
        props: {
            product,
        }
    }
}

export default ProductDetails