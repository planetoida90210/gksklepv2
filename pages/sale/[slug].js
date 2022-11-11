import Image from 'next/image';
import React, { useState } from 'react'
import { fetchSaleProducts } from '../../utils/fetchSaleProducts';
import { sanityClient, urlFor } from '../../sanity';
import { useRouter } from 'next/router';


const ProductDetails = ({product}) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  return (
    <div className="w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-8 flex">
      <div className="flex gap-[40px] p-[40px] pt-[60px]">
      <div className="flex-col">
        <div className="relative flex w-[450px] h-[450px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
          <Image src={urlFor(product?.image && product?.image[index]).url()} layout="fill" objectFit="contain"/>
          </div>
            <div className="flex gap-4 pt-6">
              {product.image?.map((item,i) => (
                <div key={i} className="relative w-[100px] h-[100px]">
                <Image
                 key={i}
                 src={urlFor(item).url()}
                 layout="fill"
                 objectFit="contain"
                 className={i === index ? 'rounded-[8px] bg-indigo-600 bg-gradient-to-r from-violet-500 to-green-500 cursor-pointer' : 'rounded-[8px] dark:bg-[#24252D] bg-[#f4f4f4] w-[70px] h-[70px] cursor-pointer'}
                 onClick={() => setIndex(i)}
                 />
                 </div>
              ))}
          </div>
          <div>
          <div className="flex-col justify-center items-center pt-2">
            <h1 className="tracking-wide text-2xl pt-4">Dodatkowe informacje:</h1>
              <div className="flex items-center w-[500px]">
                {product.additionalInfo.map((item) => (
                <div key={item._key} className="dark:border-white/10 border-black/10 border-2 p-7 flex items-center justify-center mr-2 mt-3 uppercase w-[120px] rounded-md h-[40px] text-center">{item.text}</div>
              ))}
              </div>
              
          </div>
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