import Image from 'next/image';
import React, { useState } from 'react'
import { fetchSaleProducts } from '../../utils/fetchSaleProducts';
import { sanityClient, urlFor } from '../../sanity';
import { useRouter } from 'next/router';
import { Button } from '../../components';


const ProductDetails = ({product}) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  console.log(product)
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
              <div className="flex items-center">
              {product.additionalInfo.map((item) => (
              <div key={item._key} className="dark:border-white/10 border-black/10 border-2 p-7 flex items-center justify-center mr-2 mt-3 uppercase w-[120px] rounded-md h-[40px] text-center">{item.text}</div>
              ))}
              </div>
            </div>
            </div>
        </div>  
      </div>
      <div className="w-[400px] h-[400px] flex-col flex-1 justify-center items-start pt-[60px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl">{product.title}</h1>
            <hr  className="w-[90%] mt-3 text-[0.2]"/>
            <p className="w-[70%] h-3/5 pt-[50px] text-xl">{product.description}</p>
        </div>
        <div className="pt-[10px] tracking-wide flex-col">
                {product?.colors ? (
                <div className="px-[10px] w-5/6 mx-auto">
                <h2 className="flex justify-center items-center text-xl pb-2">Kolory:</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {product.colors.map((item,i) => (
                    <div key={item._key} className={`w-[100px] h-[35px] bg-[${item.color}] rounded-md`}>{item.color}</div>
                  ))}
                </div>
                </div>
                ) : (
                <div className="flex justify-center pt-[150px]">
                  <h2>Wymiary:</h2>
                </div>
                )            
                } 
                <div className="flex w-3/5 mx-auto justify-between items-center pt-10 uppercase text-2xl border-b border-b-white/50 pb-1">
                  <p>cena:</p>
                  <p>{product.price} pln</p>
                </div>
                <div className="flex justify-center pt-[50px]">
                  <Button title="Powrót do strony głównej" onClick={() => router.back()}/>
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
