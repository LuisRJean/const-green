import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Luis Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main classMame="main-container"></main>
        </div>
  )
}

export default Layout