import React from "react";

import './Menu.scss';

import Header from "../../../components/header/Header"
import CardList from "../../../pages/binnentuin/menu/CardList";
import CardListSalads from "../../../pages/binnentuin/menu/CardListSalads";
import Footer from "../../../components/footer/Footer"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faMortarPestle, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

class MenuPage extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: ${id}`);
    }

    cardSaladClicked = (id) => {
      console.log(`Gekozen gerecht nummer: ${id}`);
    }

    render() {
      return (
        <section className="menupage">

          <Header />
          <article className="menu">
            <section className="menu_title">
              <FontAwesomeIcon className="menu__list-icon" icon={faShoppingBasket}/><h2 className="menu_title--gold">Menu</h2>
            </section>
            <section className="menu__menu">
              <a className="menu__menu__button active first" href="#snacks" type="button">Snacks</a>
              <a className="menu__menu__button" href="#salads" type="button">Salads</a>
              <a className="menu__menu__button" href="#toasts" type="button">Toasts</a>
              <a className="menu__menu__button last" href="#sandwiches" type="button">Sandwiches</a>
            </section>
          </article>

          <section id="snacks" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faUtensils}/><h2 className="menu_title--gold">Snacks</h2>
          </section>
          <CardList cardClicked = {this.cardClicked} />

          <section id="salads" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faMortarPestle}/><h2 className="menu_title--gold">Salads</h2>
          </section>
          <CardListSalads cardSaladClicked = {this.cardSaladClicked} />

          <Footer />

        </section>
      );
    }
}

export default MenuPage;
