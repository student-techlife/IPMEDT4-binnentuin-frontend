import React from "react";
import './Keuze.scss';

import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import OptieList from "../../pages/keuze/OptieList";

class KeuzePage extends React.Component {
    optieClicked = (id) => {
      console.log(`Gekozen optie: ${id}`);
    }

    render() {
      return(
        <section className="keuze">
          <Header />
          <Banner /> 
          <article className="locatie">
            <section className="locatie__heading">
              <h1>Welkom bij <span className="locatie__heading--gold">de Binnentuin</span>!</h1>
              <h2>Hoe wil je bestellen?</h2>
              <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            </section>
          </article>

          <OptieList optieClicked = {this.optieClicked} />
          <Footer />
        </section>
      );
    }
}

export default KeuzePage;
