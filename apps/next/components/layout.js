import Head from 'next/head';
import Header from './nav'
import React from 'react';
// import useWindowSize from '../lib/window';

const Layout = (props) => {
  // const {width} = useWindowSize();

  return(
  <>
    <Head>
      <title>RizzUp</title>
      <link rel='icon' href='/favicon.ico' />
      {/* <link
          href="https://fonts.googleapis.com/css2?family=Gaegu&display=swap"
          rel="stylesheet"
        /> */}
    </Head>
    <Header />
    <main>
      <div className='container'>{props.children}</div>
    </main>
   
  </>
)};

export default Layout;
