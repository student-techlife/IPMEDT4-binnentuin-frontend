import React from "react";
import '../../assets/css/auth/style.css';
import theme from "./../styles.jsx";
import Background from '../shared/background';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://binnentuin.live/">
          Binnentuin
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            {/* <Background /> */}
                <div className="login__paper">
                    <Avatar className="login__avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inloggen
                    </Typography>
                    <form className="login__form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Emailadres"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Onthoud mij"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="login__submit"
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
                            <Link href="#">
                                {"Geen account Meld je aan!"}
                            </Link>
                        </Box>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login;