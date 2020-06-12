import React, { Component } from 'react';
import theme from "../styles";
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import auth from '../../components/common/router/protected/auth';

// Component imports
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

class Dashboard extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header/>
                <React.Fragment>
                    <h1>Deze pagina mag je alleen zien als je bent ingelogd</h1>
                    <Button variant="contained" color="secondary" onClick={() => {
                        auth.logout(() => {
                            this.props.history.push("/");
                        })
                    }}>Uitloggen
                    </Button>
                </React.Fragment>
                <Footer/>
            </ThemeProvider>
        );
    }
}

export default Dashboard;
