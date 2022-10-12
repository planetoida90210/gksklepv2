import React from 'react'
import Head from 'next/head'
import { ArtPage } from '../components'


const Art = () => {
  return (
    <div>
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
    <main className="relative h-[200vh] dark:bg-[#0f0f12] bg-[#E7ECEE]">
      <ArtPage />
    </main>
    <section id="art" className="relative snap-center z-40 -mt-[100vh] min-h-screen dark:bg-[#24252D] bg-white">
         <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide md:text-5xl">
            Art
          </h1>
        </div>
    </section>
    </div>
  )
}

export default Art