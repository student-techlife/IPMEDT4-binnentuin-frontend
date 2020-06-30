import React from "react";

import Header from "../../components/header/Header";
import './Contact.scss';


class ContactPage extends React.Component {

    render() {
        return (
            <section className="contact">
                <Header/>
                <article className="contact__content">
                    <section className="contact__info">
                        <h1 className="contact__title">
                            <span className="contact__title">Openingstijden</span></h1>
                    </section>
                    <section>
                        <h3 className="contact__subtitle">Binnentuin</h3>
                        <table className="table">
                            <tbody className="table__body">
                            <tr>
                                <th className="table__day">Maandag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Dinsdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Woensdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Donderdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Vrijdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <h3 className="contact__subtitle">The Roof</h3>
                        <table className="table">
                            <tbody className="table__body">
                            <tr>
                                <th className="table__day">Maandag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Dinsdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Woensdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Donderdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            <tr>
                                <th className="table__day">Vrijdag</th>
                                <td className="table__time">8:30 - 17:00</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </article>
            </section>
        );
    }
}

export default ContactPage;
