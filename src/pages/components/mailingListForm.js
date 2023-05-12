import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './mailingListForm.module.scss';
import { Grid, Typography } from '@mui/material';

export default function MailingListForm() {
    return(
        <Grid container className={styles.formGrid} spacing={"30px"} justifyContent={"center"}>
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
                    variant="filled"
                    />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.formGridItem}>
                <TextField
                    className={styles.formInput}
                    color="primary"
                    fullWidth
                    required
                    label="Last Name"
                    variant="filled"
                    />
            </Grid>
            <Grid item xs={12} className={styles.formGridItem}>
                <TextField
                    className={styles.formInput}
                    color="primary"
                    fullWidth
                    required
                    label="Email"
                    variant="filled"
                    />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.formGridItem}>
                <Button size="large" fullWidth variant='contained' type='button'>Sign Up!</Button>
            </Grid>
        </Grid>
    )
}