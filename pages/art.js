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
    <section className="relative snap-center z-40 -mt-[100vh] min-h-screen dark:bg-[#24252D] bg-white">
      produkty
    </section>
    </div>
  )
}

export default Art