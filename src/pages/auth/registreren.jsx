// Packages
import React from "react";
import Swal from 'sweetalert2';

// Style
import './auth.scss';
import theme from "./../styles.jsx";

// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthService from '../../services/AuthService';
import auth from "../../components/common/router/protected/auth";

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Avatar, Typography, Grid, TextField, Button, Link, Box } from "@material-ui/core";

class Register extends React.Component {
    state = { name: '', username: '', email: '', password: '', confirmPassword: '' }

    async handleFormSubmit(event) {
        // Blokkeer een directe form submit
        event.preventDefault();
        
        // Zet input in een variable voor register
        const regData = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        
        // zet zelfde input in een variable voor login - na register
        const loginData = {
            username: this.state.email,
            password: this.state.password,
        }
        
        // Controleer of klant een overeenkomend wachtwoord heeft ingevoerd
        if(this.state.password === this.state.confirmPassword) {
            const responseUser = await AuthService.createUser(regData);
            
            if (responseUser) {
                // Als aanmaken van een account is gelukt
                Swal.fire({
                    icon: 'success',
                    title: 'Welkom!',
                    text: 'Het aanmaken van een account is gelukt',
                    timer: 3000,
                });
                
                const responseLogin = await AuthService.doUserLogin(loginData);
                if(responseLogin) {
                    AuthService.handleLoginSuccess(responseLogin);
                    auth.authenticated = true;
                    this.props.history.push("/dashboard");
                }
            } else {
                Swal.fire('Oops...', 'Er bestaat al een account met dit e-mailadres!', 'error');
            }
        } else {
            // Als wachtwoorden niet het zelfde zijn
            Swal.fire('Oops...', 'De ingevoerde wachtwoorden komen niet overeen', 'error');
        }
    }

    render() {
        const { name, username, email, password, confirmPassword} = this.state;
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
                        <form className="auth__form" onSubmit={event => this.handleFormSubmit(event)}>
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
                                        value={name}
                                        onChange={event => this.setState({name: event.target.value})}
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
                                        value={username}
                                        onChange={event => this.setState({username: event.target.value})}
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
                                        value={email}
                                        onChange={event => this.setState({email: event.target.value})}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="wachtwoord"
                                        label="Wachtwoord"
                                        type="password"
                                        id="wachtwoord"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={event => this.setState({password: event.target.value})}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="confirm-wachtwoord"
                                        label="Bevestig Wachtwoord"
                                        type="password"
                                        id="confirm-wachtwoord"
                                        autoComplete="confirm-password"
                                        value={confirmPassword}
                                        onChange={event => this.setState({confirmPassword: event.target.value})}
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
                                Maak account aan
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
}

export default Register;