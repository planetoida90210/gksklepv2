import Image from 'next/image';
import React from 'react'
import { fetchArtProducts } from '../../utils/fetchArtProducts';
import { sanityClient, urlFor } from '../../sanity';


const ProductDetails = ({product}) => {

  return (
    <div className='w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-4'>
        <div className="flex items-center justify-center gap-[40px]">
            <div className="relative w-[400px] h-[400px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
              <div className="">
               <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit="contain"/>
              </div>
            </div>
        </div>
    </div>
  )
}

// backend code
export const getStaticPaths = async () => {
    const products = await fetchArtProducts();
  
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
    const query = `*[_type == "art" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(query)

    return {
        props: {
            product,
        }
    }
}

export default ProductDetails