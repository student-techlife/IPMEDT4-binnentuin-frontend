import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

//Pages
import MainPage from "./pages";
import KeuzePage from "./pages/keuze/Keuze";
import NotFoundPage from "./pages/errors/404";

// const VPS = process.env.REACT_APP_URL_VPS
class App extends React.Component {
  componentDidMount() {
    axios.get("system/api/test")
      .then(res => {
          console.log(res.data);
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/keuze/keuze" component={KeuzePage} />
          <Route path="/system" />
          {/* Onderstaand onderaan laten */}
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
