import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Component imports
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Style
import "./Ingelogd.scss";

class Dashboard extends Component {
    render() {
        return (
            <section className="ingelogd">
                <Header />
                <article className="ingelogd__box">
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
                </article>
                <Footer />
            </section>
        );
    }
}

export default Dashboard;
