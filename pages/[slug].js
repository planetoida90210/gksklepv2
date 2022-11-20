import Image from 'next/image';
import { useRouter } from 'next/router';
import React,{useState} from 'react'
import { Button } from '../components';
import { sanityClient, urlFor } from '../sanity';
import { fetchProducts } from '../utils/fetchProducts';

const ProductDetails = ({product}) => {
 const router = useRouter();
 const [index, setIndex] = useState(0);


  return (
    <div className="w-screen h-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-8 flex">
        <div className="flex gap-[10px] xl:gap-[40px] p-[10px] xl:p-[40px] pt-[10px] xl:pt-[60px]">
            <div className="flex-col">
              <div className="relative flex xl:w-[450px] xl:h-[450px] w-[250px] h-[250px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
               <Image src={urlFor(product?.image && product?.image[index]).url()} layout="fill" objectFit="contain"/>
              </div>
              <div className="flex gap-2 lg:gap-4 pt-4 lg:pt-6">
              {product.image?.map((item,i) => (
                <div key={i} className="relative w-[62px] h-[62px] xl:w-[100px] xl:h-[100px] ">
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
            <div className="">
              {product.rozmiar ? (
                <>
                <h1 className="tracking-wide text-xl xl:text-2xl pt-2 xl:pt-4">Dostępne rozmiary:</h1>
                {product.rozmiar && Object.entries(product?.rozmiar).map((size, i ) => (
                <span key={i} className={`${size[1] == false ? 'line-through text-red-500' : '' } dark:border-white/10 border-black/10 border-2 inline-flex p-4 xl:p-6 justify-center items-center mr-2 mt-3 uppercase w-[10px] xl:w-[20px] h-[10px] xl:h-[20px] text-sm xl:text-base text-center rounded-md`}>{size}</span>
              ))}
                </>
              ) : (
                <div className="flex-col justify-center items-center space-x-[100px]">
                  <h1 className="tracking-wide text-xl xl:text-2xl pt-2 xl:pt-4">Dostępny rozmiar/pojemność:</h1>
                  <span className="dark:border-white/10 border-black/10 border-2 inline-flex p-5 items-center justify-center mr-2 mt-3 uppercase w-[90px] xl:w-[120px] h-[25px] xl:h-[30px] text-sm xl-text-base text-center rounded-md">{product.singleSize}</span>
                </div>
              )}
              
            </div>
            </div>
            </div>
            <div className="w-[250px] xl:w-[350px] h-[250px] xl:h-[350px] flex-col flex-1 justify-center items-start pt-[10px] xl:pt-[60px]">
              <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl xl:text-5xl">{product.title}</h1>
              <hr  className="w-2/4 xl:w-4/5 mt-3 text-[0.2] bg-black"/>
              <p className="w-[70%] h-3/5 pt-[20px] xl:pt-[40px] text-base xl:text-xl">{product.description}</p>
              </div>
              <div className="pt-[10px] xl:pt-[30px] tracking-wide flex-col">
                {product?.rozmiarowka ? (
                  <>
                <h2 className="flex justify-center items-center text-base xl:text-xl">Tabela rozmiarów:</h2>
                <div className="flex justify-center items-center w-full pt-2 xl:pt-6">
                <table className="bg-white dark:bg-[#0f0f12] text-black dark:text-white table-fixed border-collapse w-[70%] shadow-none rounded-lg text-sm xl:text-lg">
                  <tbody> 
                    <tr className="text-center h-[20px] xl:h-[40px]">
                    <td>Rozmiar</td>
                    <td>S</td> 
                    <td>M</td> 
                    <td>L</td> 
                    <td>XL</td> 
                    <td>XXL</td> 
                  </tr>  
                  <tr key="width" className="text-center h-[20px] xl:h-[40px]">
                    <td>Szerokość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key}>{item.width}</td>
                    ))}
                  </tr> 
                  <tr className="text-center h-[20px] xl:h-[40px]">
                    <td>Długość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key}>{item.height}</td>
                    ))}
                  </tr> 
                  </tbody>
                </table> 
                </div>
                </>
                ) : (
                  <div className="flex justify-center pt-[60px] xl:pt-[150px]">
                   
                </div>
                )          
                }
                <div className="flex w-3/6 xl:w-3/5 mx-auto justify-between items-center pt-5 xl:pt-10 uppercase text-base xl:text-2xl border-b border-b-black/40 dark:border-b-white/50 pb-1">
                  <p>cena:</p>
                  <p>{product.price} pln</p>
                </div>
                <div className="flex justify-center pt-[50px] xl:pt-[120px]">
                  <Button title="Powrót do strony głównej" onClick={() => router.back()}/>
                </div>  
              </div>
            </div>
        </div>
  )
}

// backend code
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
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
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await sanityClient.fetch(query)

  return {
      props: {
          product,
      }
  }
}



export default ProductDetails