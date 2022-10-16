import Image from 'next/image';
import React,{useState} from 'react'
import { sanityClient, urlFor } from '../sanity';
import { fetchProducts } from '../utils/fetchProducts';

const ProductDetails = ({product}) => {
 const [index, setIndex] = useState(0);
 const sizeKeys = Object.keys(product.rozmiar)
 sizeKeys.sort((a,b) => {
  if(a === 's') {
    return -1;
  } else if (b === 'l'){
    return -1;
  } else if (a > b) {
   return 1;
  } else if (a < b) {
    return -1
  }
 });
  return (
    <div className='w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-4'>
        <div className="flex gap-[40px] p-[40px] pt-[60px]">
            <div className="">
              <div className="relative flex w-[450px] h-[450px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
               <Image src={urlFor(product.image && product.image[index]).url()} layout="fill" objectFit="contain"/>
              </div>
               <div className="relative flex justify-center items-center gap-[10px] mt-[30px] w-[100px] h-[100px]">
              {product.image?.map((item,i) => (
                <Image
                 key={i}
                 src={urlFor(item).url()}
                 layout="fill"
                 objectFit="contain"
                 className={i === index ? 'rounded-[8px] bg-indigo-600 bg-gradient-to-r from-violet-500 to-green-500 cursor-pointer' : 'rounded-[8px] dark:bg-[#24252D] bg-[#f4f4f4] w-[70px] h-[70px] cursor-pointer'}
                 onMouseEnter={() => setIndex(i)}
                 />
              ))}
            </div>
            <div className="">
              <h1 className="tracking-wide text-2xl pt-4">Dostępne rozmiary:</h1>
                {sizeKeys.map((size) => (
                <span className="border-2 inline-flex p-6 justify-center items-center mr-2 mt-2 uppercase w-[20px] h-[20px] text-center ">{size}</span>
              ))}
            </div>
            </div>
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