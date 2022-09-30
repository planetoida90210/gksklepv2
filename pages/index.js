import React from 'react';
import Head from 'next/head';
import { HomePage } from '../components';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
    <main className="relative h-[200vh] dark:bg-[#0f0f12] bg-[#E7ECEE]">
      <HomePage />
    </main>
    </div>
  )
}

export default Home
