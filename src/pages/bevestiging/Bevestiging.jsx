import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Bevestiging.scss";
import { Link } from "react-router-dom";


class BevestigingPage extends React.Component {


    render() {
        return (
            <section className="bevestiging">
                <Header/>
                <article className="bevestiging__content">
                    <section className="bevestiging__info">
                        <h1 className="bevestiging__title">Bedankt!</h1>
                        <p className="bevestiging__text">Bedankt voor uw bestelling bij de Binnentuin!</p>
                        <p className="bevestiging__text">Alvast eet smakelijk!</p>
                    </section>
                    <section className="bevestiging__wrapper">
                        <Link to="">
                            <button className="bevestiging__button">Ga terug naar de home pagina</button>
                        </Link>
                    </section>
                </article>
                <Footer />
            </section>
        );
    }
}

export default BevestigingPage;
