import React from "react";
import './Menu.scss';


import CardList from "../../../pages/binnentuin/menu/CardList";

class MenuPage extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: + ${id}`);
    }

    render() {
      return (
        <CardList cardClicked = {this.cardClicked} />
      );
    }
}

export default MenuPage;
