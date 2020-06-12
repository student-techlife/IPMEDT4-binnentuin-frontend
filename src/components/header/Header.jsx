import React from "react";
import logo_white from '../../assets/img/logo_white.png';
import './Header.scss';

class Header extends React.Component {

    render() {
        return(
            <header className="header">
                <section className="container">
                    <figure className="header__figure">
                        <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                    </figure>
                </section>
            </header>
        );
    }
}

export default Header;