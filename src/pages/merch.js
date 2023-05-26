import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { APPURL, MAINWHITE, LINKCOLOR, NEWESTRELEASENAME, NEWESTRELEASELINK } from '@/lib/globals';

export default function Merch(props) {
  const name = props.featuredContent.length  ? 
    props.featuredContent[0].name : "Name";
  const link = props.featuredContent.length ? 
    props.featuredContent[0].link : "Link";

  return (
    <>
      <Head>
        <title>Daniel Mauro Music</title>
        <meta name="Daniel Mauro Music merch coming soon!" 
              content="The official Daniel Mauro website with all the latest news, shows, media and more. Sign up to our newsletter to hear about music and news." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{
                background:"#000000", 
                position: "relative", 
                width: "100vw", 
                height: "100vh", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden",
                gap: "20px"
        }}>
          <Box sx={{
                background:"#000000", 
                position: "relative", 
                width: "70vw", 
                height: "100vh", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden",
                textAlign: "center",
                gap: "20px"
          }}>
            <Typography variant='h4' color={MAINWHITE}>
                Merch coming soon...
            </Typography>
            <Typography variant='h4'>
                <Link href={link} target='blank' style={{color: LINKCOLOR}}>
                    While you&apos;re here, click me to stream {name}!
                </Link>
            </Typography>
            <Typography variant='h6'>
                <Link href="/" style={{color: MAINWHITE}}>
                    Or click me to go back...
                </Link>
            </Typography>
          </Box>
        </Box>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const request = await fetch(`${APPURL}/api/featuredContent`);
  const featuredContent = await request.json();
  console.log(featuredContent);
  return { props: { featuredContent } };
};