import React from "react";
import './auth.scss';
import theme from "../styles.jsx";
import AuthService from '../../services/AuthService';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Avatar, Typography, TextField, Button, Link, Box, Checkbox, FormControlLabel } from "@material-ui/core";
import auth from "../../components/common/router/protected/auth";

class Login extends React.Component {
    state = { username: '', password: '', isChecked: false }

    async handleFormSubmit(event) {
        // Blokkeer een directe form submit
        event.preventDefault();
        const postData = {
            username: this.state.username,
            password: this.state.password,
        };
        // Login via AuthService bij Laravel API
        const response = await AuthService.doUserLogin(postData);
        // console.log('response', response);
        // console.log(this.state.username, this.state.password);

        if (response) {
            // Als login geslaagd is
            AuthService.handleLoginSuccess(response, this.state.isChecked);
            auth.authenticated = true;
            this.props.history.push("/dashboard");
        } else {
            // Anders toon een error aan de klanten
            alert('Je inloggegevens komen niet overeen met een account');
        }
    }

    handleChecked() {
        this.setState({isChecked: !this.state.isChecked });
    }

    render() {
        const { username, password, isChecked } = this.state;
        return (
            <ThemeProvider theme={theme}>
            <Header />
            <Container component="main" maxWidth="xs">
                <div className="auth__paper">
                    <Avatar className="auth__avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inloggen
                    </Typography>
                    <form className="auth__form" noValidate onSubmit={event => this.handleFormSubmit(event)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="E-mailadres"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={event => this.setState({username: event.target.value})}
                            />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Wachtwoord"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={event => this.setState({password: event.target.value})}
                            />
                        <FormControlLabel
                            control={<Checkbox value="remember" checked={isChecked} onChange={() => this.handleChecked()} color="primary" />}
                            label="Onthoud mij" onClick={() => this.handleChecked()}
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="auth__submit"
                            >
                            Inloggen
                        </Button>
                        <Box mt={4} 
                            display="flex" 
                            alignItems="center"
                            justifyContent="center">
                            <Link href="#">
                                Wachtwoord vergeten?
                            </Link>
                        </Box>
                        <Box display="flex" 
                            alignItems="center"
                            justifyContent="center">
                            <Link href="/register">
                                {"Geen account Meld je aan!"}
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

export default Login;