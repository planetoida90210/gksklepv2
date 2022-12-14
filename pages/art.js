import React from 'react'
import Head from 'next/head'
import { ArtPage, CategoryTabs } from '../components'
import { fetchArtCategories } from '../utils/fetchArtCategories'
import { fetchArtProducts } from '../utils/fetchArtProducts'



const Art = ({categories,products}) => {


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
         <div className="space-y-10 py-10 xl:py-16">
          <h1 className="text-center text-3xl xl:text-5xl font-medium tracking-wide">
            Art
          </h1>
          <CategoryTabs categories={categories} products={products}/>
        </div>
    </section>
    </div>
  )
}

export default Art

export const getServerSideProps = async () => {
  const categories = await fetchArtCategories();
  const products = await fetchArtProducts();
  return {
    props: {
      categories,
      products
    }
  }
}