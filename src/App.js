import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';

import Header from './shared/Header';

import axios from 'axios';

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
      <Header />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
