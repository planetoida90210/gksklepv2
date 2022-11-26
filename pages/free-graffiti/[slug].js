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
    <div className="w-screen h-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-3 flex">
      <div className="flex gap-[10px] xl:gap-[40px] p-[10px] xl:p-[40px] pt-[10px] xl:pt-[60px] pl-8">
      <div className="flex-col">
          <div className="relative flex xl:w-[450px] xl:h-[450px] w-[250px] h-[250px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
            <Image src={urlFor(product?.image && product?.image[index]).url()} layout="fill" objectFit="contain" className="rounded-xl"/>
          </div>
            <div className="flex gap-2 xl:gap-4 pt-4 xl:pt-6">
              {product.image?.map((item,i) => (
                <div key={i} className="relative w-[62px] h-[62px] xl:w-[100px] xl:h-[100px]">
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
            <div className="flex-col justify-center items-center pt-2 w-[300px]">
                  <h1 className="tracking-wide text-xl xl:text-2xl pt-2 xl:pt-4">Dodatkowe informacje:</h1>
                  <div className="flex flex-wrap">
                  {product.additionalInfo.map((item) => (
                    <div key={item._key} className="dark:border-white/10 border-black/10 border-2 inline-flex p-6 xl:p-7 items-center justify-center mr-2 mt-2 uppercase w-[90px] xl:w-[120px] h-[25px] xl:h-[30px] text-xs xl:text-base text-center rounded-md">{item.text}</div>
                  ))}
                  </div>
            </div>
            </div>
        </div>  
      </div>
      <div className="w-[300px] xl:w-[350px] h-[250px] xl:h-[350px] flex-col flex-1 justify-center items-start xl:pt-[60px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl xl:text-5xl">{product.title}</h1>
            <hr  className="w-3/4 xl:w-4/5 mt-3 text-[0.2] bg-black"/>
            <p className="w-[80%] h-3/5 pt-[20px] xl:pt-[40px] text-base xl:text-xl">{product.description}</p>
            <div className="flex w-[65%] xl:w-5/6 pt-3 text-base xl:text-2xl justify-between">
              <p>Adres:</p>
              <p>{product.adress}</p>
            </div>
            <hr  className="w-4/6 mt-3 text-[0.2] bg-black"/>
        </div>
      <div className="flex justify-around items-center pt-2 xl:pt-[30px]">
        <div>
        <p className="pb-2 pl-1 tracking-wider text-sm xl:text-base">Dojazd komunikacją:</p>
        <div className="relative w-[100px] xl:w-[200px] h-[100px] xl:h-[200px] bg-white dark:bg-gray-700/20 rounded-xl">
          {theme === 'dark' ? (
            <Image src={urlFor(product?.imageQr[0]).url()} layout="fill" objectFit="contain" />
          ) : (
            <Image src={urlFor(product?.imageQr[1]).url()} layout="fill" objectFit="contain" />
          )}
        </div>
        </div>
        <div className="pt-5 xl:pt-0">
          <Button title="Powrót do strony głównej" onClick={() => router.back()}/>
        </div>
      </div>  
      </div>
    </div>
  )
}

// backend code
export const getStaticPaths = async () => {
  const query = `*[_type == "graffiti"] {
    slug {
      current
    }
  }
  `;
  
  const products = await sanityClient.fetch(query);
  
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
    const query = `*[_type == "graffiti" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(query)

    return {
        props: {
            product,
        }
    }
}


export default ProductDetails