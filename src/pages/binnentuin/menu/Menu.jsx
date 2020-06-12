import React from "react";

import './Menu.scss';

import Header from "../../../components/header/Header"
import CardList from "../../../pages/binnentuin/menu/CardList";
import Footer from "../../../components/footer/Footer"

class MenuPage extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: + ${id}`);
    }

    render() {
      return (
        <section>

          <Header />

          <CardList cardClicked = {this.cardClicked} />

          <Footer />
        </section>
      );
    }
}

export default MenuPage;
