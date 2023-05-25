import { useEffect, useState } from 'react';
import singletonAdmin from '@/lib/admin';
import { MAINPINK } from '@/lib/globals';
import { Box, Button, Card, CardContent, CardHeader, Grid, Input, Stack } from '@mui/material';

const adminConsole = () => {
  return (
    <>
      <Grid item xs={12} display={"flex"} justifyContent={"right"}>
        <Button variant="contained">Sign Out</Button>
      </Grid>
      <Grid item xs={12}>
          <Card>
              <CardHeader title="Featured Content" subheader="Change the featured song or album."/>
              <CardContent>
                <Stack spacing={"20px"}>
                  <Input fullWidth 
                         placeholder='Name' 
                         name='Name'/>
                  <Input fullWidth 
                         placeholder='Link' 
                         name='Link'/>
                </Stack>
              </CardContent>
              <Button fullWidth 
                      sx={{
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0
                      }}
                      variant="contained">
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
                      variant="contained">
                Download Mailing List
              </Button>
          </Card>
      </Grid>
    </>
  );
}

const adminLogin = () => {
  return (
    <>
      <Grid item xs={12}>
          <Card>
              <CardHeader title="Admin Log In"/>
              <CardContent>
                <Stack spacing={"20px"}>
                  <Input fullWidth 
                         placeholder='Email' 
                         name='Email'/>
                  <Input fullWidth 
                         placeholder='Password' 
                         name='Password'/>
                </Stack>
              </CardContent>
              <Button fullWidth 
                      sx={{
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0
                      }}
                      variant="contained">
                Log In!
              </Button>
          </Card>
      </Grid>
    </>
  );
}

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(()=>{
    const ValidateAdmin = () => {
      if(!singletonAdmin || singletonAdmin.getEmail() === "" || singletonAdmin.getPassword() === "") return;

      // query db... Select where email and password are singletonAdmin.get... If we query successfully, set admin to true. This will be validation for updates and etc.
      setIsAdmin(true);
    };

    ValidateAdmin();
  },[]);

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
                {isAdmin ? adminConsole() : adminLogin()}
            </Grid>
        </Box>
      </main>
    </>
  )
}
