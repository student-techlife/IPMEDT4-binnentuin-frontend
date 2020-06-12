import React from "react";
import './auth.scss';
import theme from "./../styles.jsx";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Avatar, Typography, Grid, TextField, Button, Link, Box } from "@material-ui/core";

const Register = () => {
    return(
        <ThemeProvider theme={theme}>
            <Header/>
            <Container component="main" maxWidth="xs">
                <div className="auth__paper">
                    <Avatar className="auth__avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Aanmelden
                    </Typography>
                    <form className="auth__form" noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    autoComplete="fname"
                                    name="Naam"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Naam"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Gebruikersnaam"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mailadres"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="wachtwoord"
                                    label="Wachtwoord"
                                    type="wachtwoord"
                                    id="wachtwoord"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className="auth__submit"
                        >
                            Aanmelden
                        </Button>
                        <Box mt={4} 
                            display="flex" 
                            alignItems="center"
                            justifyContent="center">
                            <Link href="/inloggen">
                                Heb je al een account? Log in
                            </Link>
                        </Box>
                    </form>
                </div>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}

export default Register;