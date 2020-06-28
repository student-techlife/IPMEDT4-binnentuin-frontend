import React from "react";
import logo_white from '../../assets/img/logo_white.png';
import './Header.scss';
import {Link} from "react-router-dom";

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
            </header>
        );
    }
}

export default Header;
