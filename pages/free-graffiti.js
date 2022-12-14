import React from 'react'
import Head from 'next/head'
import { FreeGraffitiPage, CategoryTabs } from '../components'
import { fetchGraffitiCategories } from '../utils/fetchGraffitiCategories'
import { fetchGraffitiProducts } from '../utils/fetchGraffitiProducts'


const Art = ({categories, products}) => {
  return (
    <div>
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
    <main className="relative h-[200vh] dark:bg-[#0f0f12] bg-[#E7ECEE]">
      <FreeGraffitiPage />
    </main>
    <section id="graffiti" className="relative snap-center z-40 -mt-[100vh] min-h-screen dark:bg-[#24252D] bg-white">
        <div className="space-y-10 py-10 xl:py-16">
          <h1 className="text-center text-3xl xl:text-5xl font-medium tracking-wide">
            Free Graffiti
          </h1>
          <CategoryTabs categories={categories} products={products}/>
        </div>
    </section>
    </div>
  )
}

export default Art

export const getServerSideProps = async () => {
  const categories = await fetchGraffitiCategories();
  const products = await fetchGraffitiProducts();
  return {
    props: {
      categories,
      products
    }
  }
}