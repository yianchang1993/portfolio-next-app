import React from 'react';
import Head from 'next/head'
import Technologies from '../components/TechnologyContent'


function work() {
  return (<div className="">
  <Head>
    <title>Technologies</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="">
    <Technologies />
    <section></section>
  </main>

  <footer className="bg-backgoundColor p-3 text-sm">
    <div className="flex justify-center text-gray-400">
      <p>© 2022 Yi-An (Andy) Chang . All Rights Reserved.</p>
    </div>
  </footer>
</div>)
}

export default work;
