import React from "react";
import logo_white from '../../img/logo_white.png';
import './Keuze.scss';

const KeuzePage = () => {
    return (
      <div className="keuze">

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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestias ad laboriosam facilis nostrum doloremque eos pariatur. Ad nesciunt dolorem quisquam assumenda fugit. Voluptatibus ab, minus natus odit quibusdam temporibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestias ad laboriosam facilis nostrum doloremque eos pariatur. Ad nesciunt dolorem quisquam assumenda fugit. Voluptatibus ab, minus natus odit quibusdam temporibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestias ad laboriosam facilis nostrum doloremque eos pariatur. Ad nesciunt dolorem quisquam assumenda fugit. Voluptatibus ab, minus natus odit quibusdam temporibus.</p>
        </article>
        

      </div>
    );
}

export default KeuzePage;