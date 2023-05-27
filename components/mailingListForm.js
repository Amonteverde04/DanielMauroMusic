import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mailingListSchema } from "@/lib/schemas/mailingListSchema";
import { APPURL } from "@/lib/globals";
import { Grid, Typography, Box, Button, TextField, Alert, Snackbar } from '@mui/material';
import styles from '@/styles/mailingListForm.module.css';

export default function MailingListForm() {
    const [submissionResponseMessage, setsubmissionResponseMessage] = useState("");
    const [submissionResponseSuccess, setSubmissionResponseSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(mailingListSchema),
    });

    const handleFirstNameUpdate = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    const handleLastNameUpdate = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
    }

    const handleEmailUpdate = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
    }

    const attemptUpdateMailingList = async () => {
        if(!firstName.length || !lastName.length || !email.length) return;

        const userMailingInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        }

        const request = await fetch(`${APPURL}/api/mailingList`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userMailingInfo),
        });

        setsubmissionResponseMessage(await request.json());
        setOpen(true);

        if(request.status !== 200)
        {
            setSubmissionResponseSuccess(false);
            return;
        }

        clearForm();
        setSubmissionResponseSuccess(true);
    }

    const CloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpen(false);
        setsubmissionResponseMessage("");
    }

    return(
        <Box sx={{position: "relative", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black", padding: "40px 0"}}>
            <Snackbar open={open} autoHideDuration={6000} onClose={CloseSnackbar}>
                <Alert onClose={CloseSnackbar} severity={submissionResponseSuccess ? "success" : "error"} sx={{ width: '100%' }}>
                    {submissionResponseMessage}
                </Alert>
            </Snackbar>
            <form className={styles.form}>
                <Grid container spacing={"20px"} justifyContent={"center"}>
                    <Grid item xs={12} textAlign={"center"}>
                        <Typography variant='h4' color="primary">
                            Sign up for the mailing list!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={styles.formGridItem}>
                        <TextField 
                            {...register("firstName")}
                            error={errors?.firstName?.message != null}
                            helperText={errors?.firstName?.message?.toString()}
                            className={styles.formInput}
                            color="info"
                            fullWidth
                            required
                            label="First Name"
                            variant="filled"
                            value={firstName}
                            onChange={(e)=>{handleFirstNameUpdate(e)}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} className={styles.formGridItem}>
                        <TextField
                            {...register("lastName")}
                            error={errors?.lastName?.message != null}
                            helperText={errors?.lastName?.message?.toString()}
                            className={styles.formInput}
                            color="info"
                            fullWidth
                            required
                            label="Last Name"
                            variant="filled"
                            value={lastName}
                            onChange={(e)=>{handleLastNameUpdate(e)}}/>
                    </Grid>
                    <Grid item xs={12} className={styles.formGridItem}>
                        <TextField
                            {...register("email")}
                            error={errors?.email?.message != null}
                            helperText={errors?.email?.message?.toString()}
                            className={styles.formInput}
                            color="info"
                            fullWidth
                            required
                            label="Email"
                            variant="filled"
                            value={email}
                            onChange={(e)=>{handleEmailUpdate(e)}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} className={styles.formGridItem}>
                        <Button size="large" 
                                fullWidth 
                                variant='contained' 
                                type='button'
                                onClick={handleSubmit(attemptUpdateMailingList)}>
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}