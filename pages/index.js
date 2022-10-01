import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Corporate Foreign Exchange Services" />
        <p className="description">
          Business and Commercial Solutions for FX Risk Management. 
    <a href="https://gsnfx.co.uk/">Corporate Foreign Exchange</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
