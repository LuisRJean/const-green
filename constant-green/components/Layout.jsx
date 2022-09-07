import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Luis's Microgreen store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      
    </div>
  )
}

export default Layout