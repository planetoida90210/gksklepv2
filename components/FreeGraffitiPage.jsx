import Image from 'next/image'
import React from 'react'
import { Button } from '.'
import  Link  from 'next/link'

// external imports
import images from '../assets/app'

const FreeGraffitiPage = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-l from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">Galeria Koloru</span>
          <span className="block">Warszawskie</span>
          <span className="block">Legale</span>
        </h1>
        <div className="space-x-8">
           <Link href="#graffiti">
            <Button title="Znajdź ściankę"/>
           </Link>   
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[600px] lg:w-[600px]">
        <Image src={images.FreeGraffitiImage} layout="fill" objectFit="contain"/>
      </div>
    </section>
  )
}

export default FreeGraffitiPage