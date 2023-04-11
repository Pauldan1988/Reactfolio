import Desc from '@/components/home-desc'
import HeroImage from '@/components/hero-image'
import Layout from '@/components/layout'
import TechList from '@/components/tech-list'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-red-900 text-xl">Sanity Test</h1>
        <Desc/>
        <HeroImage/>
        <TechList/>
      </Layout>
      
    </>
  )
}
