import React from "react";
import { Link } from "react-router-dom";
import auth from '../../components/common/router/protected/auth';
import logo_white from '../../assets/img/logo_white.png';
import './Header.scss';
import history from "../../history";

// Font Awesome
import { faShoppingBasket, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {

    render() {
      const HeaderWrap = () => window.location.pathname === "/binnentuin/menu" | window.location.pathname === "/theroof/menu" ? <Link to="/winkelmand"><FontAwesomeIcon className="header__fa-icon" icon={faShoppingBasket} /></Link> : null;
      const HeaderWrap2 = () => window.location.pathname !== "/dashboard" ? <Link to="/dashboard"><FontAwesomeIcon className="header__fa-icon" icon={faUser}/></Link> : null;
      const HeaderWrap3 = () => window.location.pathname === "/dashboard" ? <FontAwesomeIcon className="header__fa-icon" icon={faSignOutAlt} onClick={() => {auth.logout(() => {history.push("/");})}}/> : null;

      return(
          <header className="header">

              <Link to="/">
                  <figure className="header__figure">
                      <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                  </figure>
              </Link>

              <section className="header__fa-icons">
                  <HeaderWrap />
                  <HeaderWrap2 />
                  <HeaderWrap3 />
              </section>
          </header>
      );
    }
}

export default Header;
