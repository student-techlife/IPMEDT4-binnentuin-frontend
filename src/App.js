import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

//Pages
import MainPage from "./pages";
import KeuzePage from "./pages/keuze/Keuze";
import TijdPage from "./pages/tijd/Tijd";


// const VPS = process.env.REACT_APP_URL_VPS
class App extends React.Component {
  // Onderstaand dient als test om te zien of de backend nog altijd te benaderen is
  componentDidMount() {
    axios.get("https://api.binnentuin.live/api/test")
      .then(res => {
          console.log(res.data);
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/keuze" component={KeuzePage} />
          <Route exact path="/tijd" component={TijdPage} />
          {/* Onderstaand verwijst naar backend side */}
          <Route path="/system" />
        </Switch>
      </Router>
    );
  }
}

export default App;
