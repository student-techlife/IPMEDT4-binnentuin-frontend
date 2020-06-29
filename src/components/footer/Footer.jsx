import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram , faFacebook , faTwitter } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

    render() {
        return(
            <footer className="footer">
                <section className="footer__adres">
                    <p>Langegracht 70, Leiden</p>
                    <p>2e verdieping PLNT en daktuin</p>
                </section>
                <section className="footer__social">
                    <a href="https://www.instagram.com/de_binnentuin_leiden/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.facebook.com/debinnentuin" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://twitter.com/DBinnentuin" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter}/></a>
                </section>
            </footer>
        );
    }
}

export default Footer;
