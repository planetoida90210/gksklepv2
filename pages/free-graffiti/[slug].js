import Image from 'next/image';
import React, { useState } from 'react'
import { fetchGraffitiProducts } from '../../utils/fetchGraffitiProducts';
import { sanityClient, urlFor } from '../../sanity';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes'

//external imports
import { Button } from '../../components';


const ProductDetails = ({product}) => {
 const router = useRouter();
 const [index, setIndex] = useState(0);
 const theme = useTheme().theme

  return (
    <div className="w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-8 flex">
      <div className="flex gap-[40px] p-[40px] pt-[60px]">
      <div className="flex-col">
          <div className="relative flex w-[450px] h-[450px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
            <Image src={urlFor(product?.image && product?.image[index]).url()} layout="fill" objectFit="contain" className="rounded-xl"/>
          </div>
            <div className="flex gap-4 pt-6">
              {product.image?.map((item,i) => (
                <div key={i} className="relative w-[100px] h-[100px]">
                <Image
                 key={i}
                 src={urlFor(item).url()}
                 layout="fill"
                 objectFit="contain"
                 className={i === index ? 'rounded-[8px] cursor-pointer' : 'rounded-[8px] dark:bg-[#24252D] bg-[#f4f4f4] w-[70px] h-[70px] cursor-pointer'}
                 onClick={() => setIndex(i)}
                 />
                 </div>
              ))}
            </div>
            <div>
            <div className="flex-col justify-center items-center pt-2 w-[400px]">
                  <h1 className="tracking-wide text-2xl pt-4">Dodatkowe informacje:</h1>
                  <div className="flex flex-wrap">
                  {product.additionalInfo.map((item) => (
                    <div key={item._key} className="dark:border-white/10 border-black/10 border-2 inline-flex p-7 items-center justify-center mr-2 mt-3 uppercase w-[120px] rounded-md h-[30px] text-center">{item.text}</div>
                  ))}
                  </div>
            </div>
            </div>
        </div>  
      </div>
      <div className="w-[400px] h-[400px] flex-col flex-1 justify-center items-start pt-[10px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl">{product.title}</h1>
            <hr  className="w-5/6 mt-3 text-[0.2] bg-black"/>
            <p className="w-[80%] pt-[50px] text-xl tracking-wide">{product.description}</p>
            <div className="flex w-4/5 pt-3 text-2xl justify-between">
              <p>Adres:</p>
              <p>{product.adress}</p>
            </div>
            <hr  className="w-5/6 mt-4 text-[0.2] bg-black"/>
        </div>
      <div className="flex justify-around items-center pt-[30px]">
        <div>
        <p className="pb-2 pl-1 tracking-wider">Dojazd komunikacją:</p>
        <div className="relative w-[200px] h-[200px] bg-white dark:bg-gray-700/20 rounded-xl">
          {theme === 'dark' ? (
            <Image src={urlFor(product?.imageQr[0]).url()} layout="fill" objectFit="contain" />
          ) : (
            <Image src={urlFor(product?.imageQr[1]).url()} layout="fill" objectFit="contain" />
          )}
        </div>
        </div>
        <div className="">
          <Button title="Powrót do strony głównej" onClick={() => router.back()}/>
        </div>
      </div>  
      </div>
    </div>
  )
}

// backend code
export const getStaticPaths = async () => {
    const products = await fetchGraffitiProducts();
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current,
      }
    }));
    return {
      paths,
      fallback: true
    }
  };

  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "graffiti" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(query)

    return {
        props: {
            product,
        }
    }
}

export default ProductDetails