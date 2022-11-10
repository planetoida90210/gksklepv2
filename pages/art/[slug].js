import Image from 'next/image';
import React, { useState } from 'react'
import { fetchArtProducts } from '../../utils/fetchArtProducts';
import { sanityClient, urlFor } from '../../sanity';
import { useRouter } from 'next/router';
import { Button } from '../../components';


const ProductDetails = ({product}) => {
  const [index, setIndex] = useState(0);
  const router = useRouter()
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
                  {product.additionalInfo.map((item) => (
                    <span key={item._key} className="dark:border-white/10 border-black/10 border-2 inline-flex p-7 items-center justify-center mr-2 mt-3 uppercase w-[120px] rounded-md h-[30px] text-center">{item.text}</span>
                  ))}
            </div>
            </div>
        </div>  
      </div>
      <div className="w-[350px] h-[350px] flex-col flex-1 justify-center items-start pt-[60px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl">{product.title}</h1>
            <hr  className="w-4/5 mt-3 text-[0.2]"/>
            <p className="w-[70%] h-3/5 pt-[50px] text-xl">{product.description}</p>
        </div>
        <div className="pt-[30px] tracking-wide flex-col">
                {product?.rozmiarowka ? (
                  <>
                <h2 className="flex justify-center items-center text-xl">Wymiary:</h2>
                <div className="flex justify-center items-center w-full pt-3">
                <table className="bg-white dark:bg-[#0f0f12] text-black dark:text-white table-fixed border-collapse w-full shadow-none rounded-lg text-lg">
                  <tbody> 
                  <tr key="width" className="text-center h-[40px]">
                    <td>Szerokość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key} className="uppercase">{item.width} cm</td>
                    ))}
                  </tr> 
                  <tr className="text-center h-[40px]">
                    <td>Długość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key} className="uppercase">{item.height} cm</td>
                    ))}
                  </tr> 
                  </tbody>
                </table> 
                </div>
                </>
                ) : (
                  <div className="flex justify-center pt-[150px]">
                   
                </div>
                )            
                } 
                <div className="flex w-3/5 mx-auto justify-between items-center pt-10 uppercase text-2xl border-b border-b-white/50 pb-1">
                  <p>cena:</p>
                  <p>{product.price} pln</p>
                </div>
                <div className="flex justify-center pt-[120px]">
                  <Button title="Powrót do strony głównej" onClick={() => router.back()}/>
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