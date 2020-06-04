import React from "react";

import '../assets/css/App.css';
import '../assets/css/Home.css';

import Index from '../assets/img/index.png';
import Header from '../shared/Header';
import Button from '../components/Button/index';


const MainPage = () => {
    return [
      <Header />,
      <section>
        <img className="image" src={Index} alt="Foto van de binnentuin"/>
      </section>,
      <section className="content">
        <h1 className="text text__welcome">Welkom bij de <span className="text text__secondary">Binnentuin</span></h1>
        <h5 className="text text__sub">Hoe wil je bestellen?</h5>
      </section>
    ];
}

export default MainPage;