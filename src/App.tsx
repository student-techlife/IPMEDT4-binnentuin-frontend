import React, { Component } from 'react';
import './App.css';

import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import { ProtectedRoute } from './components/common/router/protected';

// Pages
import KeuzePage from "./pages/keuze/Keuze";
import MenuPageBinnentuin from "./pages/binnentuin/menu/Menu";
import TijdPage from "./pages/tijd/Tijd";
import PretestPage from "./pages/pre-test/Pretest";
import ContactPage from "./pages/contact/Contact";
import WinkelmandPage from "./pages/winkelmand/winkelmand";
import TheRoofPage from "./pages/theRoof/MenuRoof";
import BevestigingPage from "./pages/bevestiging/Bevestiging";
import IngelogdPage from "./pages/ingelogd/Ingelogd";

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
  { path: "/", component: KeuzePage, exact: true },
  { path: "/tijd", component: TijdPage, exact: true },
  { path: "/pretest", component: PretestPage, exact: true },
  { path: "/binnentuin/menu", component: MenuPageBinnentuin, exact: true },
  { path: "/inloggen", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
  { path: "/contact", component: ContactPage, exact: true },
  { path: "/winkelmand", component: WinkelmandPage, exact: true},
  { path: "/theroof/menu", component: TheRoofPage, exact: true},
  { path: "/bevestiging", component: BevestigingPage, exact: true},
  { path: "/ingelogd", component: IngelogdPage, exact: true}
];

const protectedRoutes: Array<any> = [
  { path: "/dashboard", component: Dashboard, exact: true },
];

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
      </Router>
    );
  }
}

export default App;
