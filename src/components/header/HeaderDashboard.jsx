import React from "react";
import { Link } from "react-router-dom";
import auth from '../../components/common/router/protected/auth';
import logo_white from '../../assets/img/logo_white.png';
import history from "../../history";

// Font Awesome
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import './Header.scss';

class HeaderDashboard extends React.Component {

    render() {
        return(
            <header className="header">
                <Link to="/">
                    <figure className="header__figure">
                        <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                    </figure>
                </Link>

                <section className="header__fa-icons">
                    <FontAwesomeIcon className="header__fa-icon" icon={faSignOutAlt} onClick={() => {
                        auth.logout(() => {
                            history.push("/");
                        })
                    }}/>
                </section>
            </header>
        );
    }
}

export default HeaderDashboard;
