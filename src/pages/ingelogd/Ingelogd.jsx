import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Ingelogd.scss";
import { Link } from "react-router-dom";


class IngelogdPage extends React.Component {


    render() {
        return (
            <section className="ingelogd">
                <Header/>
                <article className="ingelogd__content">
                    <section className="ingelogd__info">
                        <h1 className="ingelogd__title">Je bent ingelogd</h1>
                    </section>
                    <section className="ingelogd__wrapper">
                        <Link to="">
                            <button className="ingelogd__button">Ga door om te bestellen</button>
                        </Link>
                    </section>
                </article>
                <Footer />
            </section>
        );
    }
}

export default IngelogdPage;
