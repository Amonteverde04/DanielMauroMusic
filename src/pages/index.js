import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Landing.module.css';
import Nav from './components/nav';

const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
      <Head>
        <title>Daniel Mauro Music</title>
        <meta name="description" 
              content="The official Daniel Mauro website with all the latest news, shows, media and more. Sign up to our newsletter to hear about music and news." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
      </main>
    </>
  )
}
