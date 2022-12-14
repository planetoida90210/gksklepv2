import React from 'react';
import Head from 'next/head';
import { HomePage, CategoryTabs } from '../components';
import { fetchProductCategories } from '../utils/fetchProductCategories';
import { fetchProducts } from '../utils/fetchProducts';

const Home = ({categories, products}) => {
  return (
    <div className="">
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
    <main className="relative h-[200vh] dark:bg-[#0f0f12] bg-[#E7ECEE]">
      <HomePage />
    </main>
    <section id="products" className="relative snap-center z-40 -mt-[100vh] min-h-screen dark:bg-[#24252D] bg-[#f4f4f4]">
      <div className="space-y-10 py-10 xl:py-16">
        <h1 className="text-center text-3xl xl:text-5xl font-medium tracking-wide">
          Produkty
        </h1>
        <CategoryTabs categories={categories} products={products} />
      </div>
    </section>
    </div>
  )
}
export default Home

// Backend code
export const getServerSideProps = async () => {
  const categories = await fetchProductCategories();
  const products = await fetchProducts();
  return {
    props: {
      categories,
      products
    }
  }
}