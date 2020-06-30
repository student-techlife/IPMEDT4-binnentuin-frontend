import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './components/common/router/protected';
import axios from 'axios';

// Pages
import MainPage from "./pages";
import KeuzePage from "./pages/keuze/Keuze";
import MenuPageBinnentuin from "./pages/binnentuin/menu/Menu";
import TijdPage from "./pages/tijd/Tijd";
import PretestPage from "./pages/pre-test/Pretest";
import ContactPage from "./pages/contact/Contact";
import WinkelmandPage from "./pages/winkelmand/winkelmand";

// Auth
import Login from "./pages/auth/inloggen";
import Register from "./pages/auth/registreren";
import Dashboard from "./pages/profile/dashboard";

interface GuestRouteInterface {
  path: string;
  component: any;
  exact?: boolean;
}

const guestRoutes: Array<GuestRouteInterface> = [
  { path: "/", component: MainPage, exact: true },
  { path: "/keuze", component: KeuzePage, exact: true },
  { path: "/tijd", component: TijdPage, exact: true },
  { path: "/pretest", component: PretestPage, exact: true },
  { path: "/binnentuin/menu", component: MenuPageBinnentuin, exact: true },
  { path: "/inloggen", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
  { path: "/contact", component: ContactPage, exact: true },
  { path: "/winkelmand", component: WinkelmandPage, exact: true},
];

const protectedRoutes: Array<any> = [
  { path: "/dashboard", component: Dashboard, exact: true },
];

class App extends Component {
  // Onderstaand dient als test om te zien of de backend nog altijd te benaderen is
  componentDidMount() {
    axios.get("https://api.binnentuin.live/api/test")
      .then(res => {
          console.log(res.data);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {guestRoutes.map((route, key) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
          {protectedRoutes.map((route, key) => {
            return (
              <ProtectedRoute
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
