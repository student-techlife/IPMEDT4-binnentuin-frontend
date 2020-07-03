import React from "react";
import { connect } from 'react-redux';
import { addToCart } from '../../components/actions/cartActions';
import { Link } from 'react-router-dom';

import '../binnentuin/menu/Menu.scss';

import HeaderShoppingCart from "../../components/header/HeaderShoppingCart"
import CardList from "../../pages/theRoof/CardListRoof";
import Footer from "../../components/footer/Footer"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

class MenuPageTheRoof extends React.Component {
    cardClicked = (id) => {
      console.log(`Gekozen gerecht nummer: ${id}`);
    }

    handleClick = (id) => {
      this.props.addToCart(id);
    }

    render() {
      return (
        <section className="menupage">

          <HeaderShoppingCart />
          <article className="menu">
            <p className="menu_text">Neemt u deel uit van de <span className="menu_title--gold">Community</span> dan hoef je geen kaartje te kopen. Jullie kunnen langs komen en aanschuiven als er plek is!</p>
            <section className="menu_title">
              <FontAwesomeIcon className="menu__list-icon" icon={faShoppingBasket}/><h2 className="menu_title--gold">Menu</h2>
            </section>
          </article>

          <CardList cardClicked = {this.handleClick} />
          <section className= "menu__mini">
            <Link to="/winkelmand">
            <FontAwesomeIcon className="menu__mini--button" icon={faShoppingBasket}/>
            </Link>
          </section>
          
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

export default connect(mapStateToProps,mapDispatchToProps)(MenuPageTheRoof);
