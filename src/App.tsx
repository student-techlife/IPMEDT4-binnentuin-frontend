import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './components/common/router/protected';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./store/reducers";
import axios from 'axios';

//Pages
import MainPage from "./pages";
import KeuzePage from "./pages/keuze/Keuze";

import Login from "./pages/auth/inloggen";
import Register from "./pages/auth/registreren";
import Dashboard from "./pages/profile/dashboard";

interface GuestRouteInterface {
  path: string;
  component: any;
  exact?: boolean;
}

const store = createStore(rootReducers, applyMiddleware(thunk));

const guestRoutes: Array<GuestRouteInterface> = [
  { path: "/", component: MainPage, exact: true },
  { path: "/keuze", component: KeuzePage, exact: true },
  { path: "/inloggen", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
];

const protectedRoutes: Array<any> = [
  { path: "/dashboard", component: Dashboard, exact: true },
];

// const VPS = process.env.REACT_APP_URL_VPS
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
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={MainPage} />
      //     <Route exact path="/keuze" component={KeuzePage} />
      //     <Route exact path="/inloggen" component={Login} />
      //     <Route exact path="/register" component={Register} />
      //     <Route exact path="/dashboard" component={Dashboard} />
      //     {/* Onderstaand verwijst naar backend side */}
      //     <Route path="/system" />
      //   </Switch>
      // </Router>
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
          <Provider store={store}>
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
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
