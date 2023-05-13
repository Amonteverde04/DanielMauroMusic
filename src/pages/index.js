import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Nav from './components/nav';
import HeroLabel from './components/heroLabel';
import MailingListForm from './components/mailingListForm';
import styles from '../styles/Landing.module.css';
import SocialsSideBar from './components/socialsSideBar';

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
        <Box sx={{position: "relative", width: "100vw", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: "#000000"}}>
            <Image src={"/images/comeHomeLong.png"} alt='Come Home Album Cover Art' sizes='100% 100%' fill priority quality={100} className={styles.desktop}/>
            <Image src={"/images/comeHome.PNG"} alt='Come Home Album Cover Art' sizes='100% 100%' fill priority quality={100} className={styles.mobile}/>
            <SocialsSideBar />
        </Box>
        <HeroLabel />
        <Box sx={{position: "relative", width: "100vw", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black"}}>
          <MailingListForm />
        </Box>
      </main>
    </>
  )
}
