import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './mailingListForm.module.scss';
import { Grid, Typography, Box } from '@mui/material';

export default function MailingListForm() {
    return(
        <Box sx={{position: "relative", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black", padding: "40px 0"}}>
            <Grid container className={styles.formGrid} spacing={"20px"} justifyContent={"center"}>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant='h4' color="primary">
                        Sign up for the mailing list!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.formGridItem}>
                    <TextField 
                        className={styles.formInput}
                        color="primary"
                        fullWidth
                        required
                        label="First Name"
                        variant="filled"/>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.formGridItem}>
                    <TextField
                        className={styles.formInput}
                        color="primary"
                        fullWidth
                        required
                        label="Last Name"
                        variant="filled"/>
                </Grid>
                <Grid item xs={12} className={styles.formGridItem}>
                    <TextField
                        className={styles.formInput}
                        color="primary"
                        fullWidth
                        required
                        label="Email"
                        variant="filled"/>
                </Grid>
                <Grid item xs={12} sm={6} className={styles.formGridItem}>
                    <Button size="large" fullWidth variant='contained' type='button'>Sign Up</Button>
                </Grid>
            </Grid>
        </Box>
    )
}