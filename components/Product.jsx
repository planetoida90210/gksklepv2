import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';



const Product = ({product}) => {


  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#e8e8e8] dark:bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit="contain"/>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-black/80 dark:text-white md:text-2xl">
          <p>{product.title}</p>
          <p>{product.price} PLN</p>
        </div>
        <div 
        className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
        >

        </div>
      </div>
    </div>
  )
}

export default Product