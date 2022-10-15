import React from 'react'
import { Product } from '../../components'
import { sanityClient } from '../../sanity';
import { fetchProducts } from '../../utils/fetchProducts';

const ProductDetails = ({product}) => {
  
  return (
    <div className='w-screen h-screen bg-[#E7ECEE] dark:bg-[#0f0f12]'>
        <div className="flex items-center justify-center gap-[40px]">
            <h1>{product.title}</h1>
        </div>
    </div>
  )
}

// backend code
export const getStaticPaths = async () => {
    const products = await fetchProducts();
  
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
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(query)

    return {
        props: {
            product,
        }
    }
}

export default ProductDetails