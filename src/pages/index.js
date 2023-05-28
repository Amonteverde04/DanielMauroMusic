import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Nav from '../../components/nav';
import HeroLabel from '../../components/heroLabel';
import MailingListForm from '../../components/mailingListForm';
import styles from '@/styles/index.module.css';
import SocialsSideBar from '../../components/socialsSideBar';
import { APPURL } from '@/lib/globals';
import { Grid } from '@mui/material';

export default function Landing({ featuredContent }) {
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
        <SocialsSideBar />
        <Nav />
        <Box className={styles.imageContainer}>
            <Image src={"/images/comeHomeLong.png"} loading="lazy" alt='Come Home Album Cover Art' sizes='100% 100%' fill quality={100} className={styles.desktop}/>
            <Image src={"/images/comeHome.PNG"} loading="lazy" alt='Come Home Album Cover Art' sizes='100% 100%' fill quality={100} className={styles.mobile}/>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <HeroLabel featuredContent={featuredContent} />
          </Grid>
          <Grid item xs={12}>
              <MailingListForm />
          </Grid>
        </Grid>

      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const request = await fetch(`${APPURL}/api/featuredContent`);
  const featuredContent = await request.json();
  return { props: { featuredContent } };
};