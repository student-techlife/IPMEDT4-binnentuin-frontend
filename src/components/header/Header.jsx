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

                <Link to="/">
                    <figure className="header__figure">
                        <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                    </figure>
                </Link>

                <section className="header__fa-icons">
                    <Link to="/winkelmand">
                        <FontAwesomeIcon className="header__fa-icon" icon={faShoppingBasket}/>
                    </Link>
                    <Link to="/dashboard">
                        <FontAwesomeIcon className="header__fa-icon" icon={faUser}/>
                    </Link>

                </section>
            </header>
        );
    }
}

export default Header;
