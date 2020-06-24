import React from "react";

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

class Winkelmand extends React.Component {
    render () {
        return (
            <section>
                <Header />
                <h1>Winkelmand</h1>
                <Footer />
            </section>
        )
    };
}

export default Winkelmand;