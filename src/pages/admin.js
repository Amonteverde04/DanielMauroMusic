import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { MAINWHITE, LINKCOLOR, NEWESTRELEASENAME, NEWESTRELEASELINK } from '@/lib/globals';
import { Card, CardActionArea, CardContent, CardHeader, Grid } from '@mui/material';

export default function Admin() {
  return (
    <>
      <main style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box sx={{
                position: "relative", 
                width: "50vw", 
                height: "100vh", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                overflow: "hidden",
                gap: "20px"
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Hello Title" subheader="Hello sub title"/>
                        <CardContent>
                            Hello Content
                        </CardContent>
                        <CardActionArea>
                            Hello Action
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
      </main>
    </>
  )
}
