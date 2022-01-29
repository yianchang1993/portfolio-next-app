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
        <Content/>
        <section>
        </section>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
