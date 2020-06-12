import React from "react";
import logo_white from '../../img/logo_white.png';
import './Keuze.scss';

import OptieList from "../../pages/keuze/OptieList";

class KeuzePage extends React.Component {
    optieClicked = (id) => {
      console.log(`Gekozen optie: ${id}`);
    }

    render() {
      return(
        <section className="keuze">

          <header className="header">
            <section className="container">
              <figure className="header__figure">
                <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
              </figure>
            </section>
          </header>

          <section className="banner"></section>

          <article className="locatie">
            <section className="locatie__heading">
              <h1>Welkom bij <span className="locatie__heading--gold">de Binnentuin</span>!</h1>
              <h2>Hoe wil je bestellen?</h2>
            </section>
          </article>

          <OptieList optieClicked = {this.optieClicked} />

          <footer className="footer">
            <section className="footer__adres">
              <p>Langegracht 70, Leiden</p>
              <p>2e verdieping PLNT en daktuin</p>
            </section>
            <section className="footer__social">
              {/* Facebook, Twitter, Instagram */}
            </section>
          </footer>

        </section>
      );
    }
}

export default KeuzePage;
