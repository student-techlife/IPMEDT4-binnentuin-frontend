import React from "react";
import { connect } from 'react-redux';
import { addToCart } from '../../../components/actions/cartActions';

import './Menu.scss';

import Header from "../../../components/header/Header"
import CardList from "../../../pages/binnentuin/menu/CardList";
import CardListSalads from "../../../pages/binnentuin/menu/CardListSalads";
import CardListToasts from "../../../pages/binnentuin/menu/CardListToasts";
import CardListSandwiches from "../../../pages/binnentuin/menu/CardListSandwiches";
import CardListBagels from "../../../pages/binnentuin/menu/CardListBagels";
import Footer from "../../../components/footer/Footer"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faMortarPestle, faShoppingBasket, faBreadSlice, faBacon} from "@fortawesome/free-solid-svg-icons";

class MenuPageBinnentuin extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    cardClicked = (id) => {
        console.log(`Gekozen gerecht nummer: ${id}`);
    }

    cardSaladClicked = (id) => {
        console.log(`Gekozen gerecht nummer: ${id}`);
    }

    cardToastClicked = (id) => {
        console.log(`Gekozen gerecht nummer: ${id}`);
    }

    cardSandwichClicked = (id) => {
        console.log(`Gekozen gerecht nummer: ${id}`);
    }

    cardBagelClicked = (id) => {
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
              <a className="menu__menu__button" href="#sandwiches" type="button">Sandwiches</a>
              <a className="menu__menu__button last" href="#bagels" type="button">Bagels</a>
            </section>
          </article>

          <section id="snacks" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faUtensils}/><h2 className="menu_title--gold">Snacks</h2>
          </section>
          <CardList cardClicked = {this.handleClick} />

          <section id="salads" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faMortarPestle}/><h2 className="menu_title--gold">Salads</h2>
          </section>
          <CardListSalads cardSaladClicked = {this.handleClick} />

          <section id="toasts" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faBreadSlice}/><h2 className="menu_title--gold">Toasts</h2>
          </section>
          <CardListToasts cardToastClicked = {this.handleClick} />

          <section id="sandwiches" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faBacon}/><h2 className="menu_title--gold">Sandwiches</h2>
          </section>
          <CardListSandwiches cardSandwichClicked = {this.handleClick} />

          <section id="bagels" className="menu_title">
            <FontAwesomeIcon className="menu__list-icon" icon={faBacon}/><h2 className="menu_title--gold">Bagels</h2>
          </section>
          <CardListBagels cardBagelClicked = {this.handleClick} />

          <Footer />

        </section>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

// export default MenuPage;
export default connect(mapStateToProps,mapDispatchToProps)(MenuPageBinnentuin);
