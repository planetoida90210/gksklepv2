import React from 'react';
import Head from 'next/head';
import { Header } from '../components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Galeria Koloru</title>
        <link rel="icon" href="/favivon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
