import React from "react";
import './Menu.scss';
import logo_white from '../../../assets/img/logo_white.png';


import CardList from "../../../pages/binnentuin/menu/CardList";

class MenuPage extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: + ${id}`);
    }

    render() {
      return (
        <section>

          <header className="header">
            <section className="container">
              <figure className="header__figure">
                <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
              </figure>
            </section>
          </header>

          <CardList cardClicked = {this.cardClicked} />
        </section>
      );
    }
}

export default MenuPage;
