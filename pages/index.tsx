import Head from 'next/head'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Yi-An(Andy) Chang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Content />
        {/* <section></section> */}
      </main>

      <footer className="bg-backgoundColor p-3 text-sm">
        <div className="flex justify-center text-gray-400">
          <p>© 2022 Yi-An (Andy) Chang . All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
