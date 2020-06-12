import React from "react";
import './Footer.scss';

class Footer extends React.Component {

    render() {
        return(
            <footer className="footer">
                <section className="footer__adres">
                    <p>Langegracht 70, Leiden</p>
                    <p>2e verdieping PLNT en daktuin</p>
                </section>
                <section className="footer__social">
                    {/* Facebook, Twitter, Instagram */}
                </section>
            </footer>
        );
    }
}

export default Footer;