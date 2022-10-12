import React from 'react';
import Head from 'next/head';
import { HomePage, CategoryTabs } from '../components';
import { fetchProductCategories } from '../utils/fetchProductCategories';

const Home = ({categories}) => {

  return (
    <div className="">
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
    <main className="relative h-[200vh] dark:bg-[#0f0f12] bg-[#E7ECEE]">
      <HomePage />
    </main>
    <section id="products" className="relative snap-center z-40 -mt-[100vh] min-h-screen dark:bg-[#24252D] bg-white">
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide md:text-5xl">
          Produkty
        </h1>
        <CategoryTabs categories={categories} />
      </div>
    </section>
    </div>
  )
}
export default Home

// Backend code
export const getServerSideProps = async () => {
  const categories = await fetchProductCategories() 
  return {
    props: {
      categories
    }
  }
}