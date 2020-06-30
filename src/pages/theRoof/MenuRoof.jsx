import React from "react";

import '../binnentuin/menu/Menu.scss';

import Header from "../../components/header/Header"
import CardList from "../../pages/theRoof/CardListRoof";
import Footer from "../../components/footer/Footer"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faMortarPestle, faShoppingBasket, faBreadSlice, faBacon} from "@fortawesome/free-solid-svg-icons";

class MenuPage extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: ${id}`);
    }


    render() {
      return (
        <section className="menupage">

          <Header />
          <article className="menu">
            <p className="menu_text">Neemt u deel uit van de <span className="menu_title--gold">Community</span> dan hoef je geen kaartje te kopen. Jullie kunnen langs komen en aanschuiven als er plek is!</p>
            <section className="menu_title">
              <FontAwesomeIcon className="menu__list-icon" icon={faShoppingBasket}/><h2 className="menu_title--gold">Menu</h2>
            </section>
          </article>

          <CardList cardClicked = {this.cardClicked} />


          <Footer />

        </section>
      );
    }
}

export default MenuPage;
