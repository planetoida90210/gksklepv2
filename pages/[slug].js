import Image from 'next/image';
import React,{useState} from 'react'
import { Button } from '../components';
import { sanityClient, urlFor } from '../sanity';
import { fetchProducts } from '../utils/fetchProducts';

const ProductDetails = ({product}) => {
 const [index, setIndex] = useState(0);
 console.log(product)

  return (
    <div className='w-screen nav-h overflow-hidden bg-[#E7ECEE] dark:bg-[#0f0f12] pt-4 flex'>
        <div className="flex gap-[40px] p-[40px] pt-[60px]">
            <div className="flex-col">
              <div className="relative flex w-[450px] h-[450px] dark:bg-[#24252D] bg-[#f4f4f4] rounded-xl">
               <Image src={urlFor(product.image && product.image[index]).url()} layout="fill" objectFit="contain"/>
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
            <div className="">
              <h1 className="tracking-wide text-2xl pt-4">Dostępne rozmiary:</h1>
                {product.rozmiar && Object.entries(product?.rozmiar).map((size, i ) => (
                <span key={i} className={`${size[1] == false ? 'line-through text-red-500' : '' } border-2 inline-flex p-6 justify-center items-center mr-2 mt-2 uppercase w-[20px] h-[20px] text-center`}>{size}</span>
              ))}
            </div>
            </div>
            </div>
            <div className="w-[350px] h-[350px] flex-col flex-1 justify-center items-start pt-[60px]">
              <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl">{product.title}</h1>
              <hr  className="w-4/5 mt-3 text-[0.2]"/>
              <p className="w-[55%] h-3/5 pt-[50px] text-xl">{product.description}</p>
              </div>
              <div className="pt-[40px] tracking-wide flex-col">
                {product?.rozmiarowka ? (
                  <>
                     <h2 className="flex justify-center items-center">Tabela rozmiarów:</h2>
                <div className="flex justify-center items-center w-full pt-8">
                <table className="bg-[#0f0f12] text-white table-fixed border-collapse w-[80%] shadow-none rounded-lg text-lg">
                  <tbody> 
                    <tr className="text-center h-[40px]">
                    <td>Rozmiar</td>
                    <td>S</td> 
                    <td>M</td> 
                    <td>L</td> 
                    <td>XL</td> 
                    <td>XXL</td> 
                  </tr>  
                  <tr className="text-center h-[40px]">
                    <td>Szerokość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key}>{item.width}</td>
                    ))}
                  </tr> 
                  <tr className="text-center h-[40px]">
                    <td>Długość</td>
                    {product.rozmiarowka.map((item) => (
                      <td key={item.key}>{item.height}</td>
                    ))}
                  </tr> 
                  </tbody>
                </table> 
                </div>
                <Button />
                </>
                ) : (
                  <Button />
                )            
                }   
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