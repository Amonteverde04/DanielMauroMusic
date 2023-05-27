import { useState } from 'react';
import { useRouter } from 'next/router';
import { APPURL, MAINPINK } from '@/lib/globals';
import { Box, Button, Card, CardContent, CardHeader, Grid, Input, Stack, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const AdminConsole = (props) => {
  const router = useRouter();

  const name = props.featuredContent.length  ? 
    props.featuredContent[0].name : "Name";
  const link = props.featuredContent.length ? 
    props.featuredContent[0].link : "Link";
  const action = props.featuredContent.length ? 
    props.featuredContent[0].action : "Pre-Save";

  const [featuredName, setFeaturedName] = useState("");
  const [featuredLink, setFeaturedLink] = useState("");
  const [featuredAction, setFeaturedAction] = useState(action);

  const handleFeaturedNameUpdate = (e) => {
    e.preventDefault();
    setFeaturedName(e.target.value);
  }

  const handleFeaturedLinkUpdate = (e) => {
    e.preventDefault();
    setFeaturedLink(e.target.value);
  }

  const handleFeaturedActionUpdate = (e) => {
    e.preventDefault();
    setFeaturedAction(e.target.value);
  }

  const updateFeaturedContent = async () => {
    if(featuredName.length && featuredLink.length) {

      const featuredContent = {
        email: props.email,
        password: props.password,
        featuredName: featuredName,
        featuredLink: featuredLink,
        featuredAction: featuredAction
      };

      const request = await fetch(`${APPURL}/api/featuredContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(featuredContent)
      });
      
      if(await request.json() === true)
      {
        router.reload();
      }
    }
  }

  const getMailingList = async () => {
      const credentials = {
        email: props.email,
        password: props.password,
      };

      const request = await fetch(`${APPURL}/api/mailingList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
      }).then( res => res.blob() ).then( blob => {
        var file = window.URL.createObjectURL(blob);
        window.location.assign(file);
      });
  }

  return (
    <>
      <Grid item xs={12} display={"flex"} justifyContent={"space-between"}>
        <Button variant="contained"
                onClick={()=>{router.push("/")}}>
          Home
        </Button>
        <Button variant="contained"
                onClick={router.reload}>
          Log Out
        </Button>
      </Grid>
      <Grid item xs={12}>
          <Card>
              <CardHeader title="Featured Content" 
                          subheader="Change the featured song or album."/>
              <CardContent>
                <Stack spacing={"20px"}>
                  <Input fullWidth 
                         placeholder={name} 
                         name='Name'
                         onChange={(e)=>{handleFeaturedNameUpdate(e)}}/>
                  <Input fullWidth 
                         placeholder={link} 
                         name='Link'
                         onChange={(e)=>{handleFeaturedLinkUpdate(e)}}/>
                  <RadioGroup
                    defaultValue={action}
                    name="action"
                    onChange={(e)=>{handleFeaturedActionUpdate(e)}}
                  >
                    <FormControlLabel value="Pre-Save" control={<Radio />} label="Pre-Save" />
                    <FormControlLabel value="Stream" control={<Radio />} label="Stream" />
                  </RadioGroup>
                </Stack>
              </CardContent>
              <Button fullWidth 
                      sx={{
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0
                      }}
                      variant="contained"
                      onClick={updateFeaturedContent}>
                Update Featured Content
              </Button>
          </Card>
      </Grid>
      <Grid item xs={12}>
          <Card>
              <CardHeader title="Download Mailing List" subheader="Get the list of users who signed up for the mailing list."/>
              <Button fullWidth 
                      sx={{
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0
                      }}
                      variant="contained"
                      onClick={getMailingList}>
                Download Mailing List
              </Button>
          </Card>
      </Grid>
    </>
  );
}

const AdminLogin = (props) => {
  const router = useRouter();

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    props.setEmail(e.target.value);
  }
  
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    props.setPassword(e.target.value);
  }

  return (
    <>
      <Grid item xs={12} display={"flex"} justifyContent={"left"}>
        <Button variant="contained"
                onClick={()=>{router.push("/")}}>
          Home
        </Button>
      </Grid>
      <Grid item xs={12}>
          <Card>
              <CardHeader title="Admin Log In"/>
              <CardContent>
                <Stack spacing={"20px"}>
                  <Input fullWidth 
                         placeholder='Email' 
                         name='Email'
                         onChange={(e)=>{handleEmailUpdate(e)}}/>
                  <Input fullWidth 
                         placeholder='Password' 
                         name='Password'
                         onChange={(e)=>{handlePasswordUpdate(e)}}/>
                </Stack>
              </CardContent>
              <Button fullWidth 
                      sx={{
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0
                      }}
                      variant="contained"
                      type="submit"
                      onClick={props.logIn}>
                Log In!
              </Button>
          </Card>
      </Grid>
    </>
  );
}

export default function Admin({ featuredContent }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    if(email.length && password.length) {

      const credentials = {
        email: email,
        password: password
      };

      const request = await fetch(`${APPURL}/api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
      });
      
      if(await request.json() === true)
      {
        setIsAdmin(true);
      }
    }
  }

  return (
    <>
      <main style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box sx={{
                position: "relative", 
                width: "100vw", 
                height: "100vh", 
                display: "flex",
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden",
                gap: "20px",
                backgroundColor: MAINPINK
        }}>
            <Grid container gap={"20px"} width={"50vw"}>
                {
                isAdmin ? 
                  <AdminConsole featuredContent={featuredContent}
                                email={email} 
                                password={password}/> 
                : 
                  <AdminLogin setIsAdmin={setIsAdmin}
                              setEmail={setEmail}
                              setPassword={setPassword}
                              logIn={logIn}/>
                }
            </Grid>
        </Box>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const request = await fetch(`${APPURL}/api/featuredContent`);
  const featuredContent = await request.json();
  return { props: { featuredContent } };
};