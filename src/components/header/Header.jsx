import React from "react";
import { Link } from "react-router-dom";
import logo_white from '../../assets/img/logo_white.png';
import './Header.scss';

// Font Awesome
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {

    render() {
        return(
            <header className="header">
                <section className="container">
                    <Link to="/keuze">
                        <figure className="header__figure">
                            <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                        </figure>
                    </Link>
                </section>
                <Link to="/winkelmand">
                    <FontAwesomeIcon className="header__fa_icons" icon={faShoppingBasket} size="2x" />
                </Link>
                <Link to="/dashboard">
                    <FontAwesomeIcon className="header__fa_icons" icon={faUser} size="2x" />
                </Link>
            </header>
        );
    }
}

export default Header;
