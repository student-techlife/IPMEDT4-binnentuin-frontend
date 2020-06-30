import React from "react";
import UrlService from "../../services/UrlService";

import Header from "../../components/header/Header";
import './Contact.scss';
import axios from "axios";

class ContactPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Openingstijden: []
        };
    }

    getOpeningstijden() {

        // De Binnentuin
        axios.get(UrlService.BinnentuinOpeningstijden(), {}).then(res => {
            const data = res.data
            
            // States
            let statusMaandag = data[0].status === 1 ? data[0].openingstijd + ' - ' + data[0].sluitingstijd : 'Gesloten';
            let statusDinsdag = data[1].status === 1 ? data[1].openingstijd + ' - ' + data[1].sluitingstijd : 'Gesloten';
            let statusWoensdag = data[2].status === 1 ? data[2].openingstijd + ' - ' + data[2].sluitingstijd : 'Gesloten';
            let statusDonderdag = data[3].status === 1 ? data[3].openingstijd + ' - ' + data[3].sluitingstijd : 'Gesloten';
            let statusVrijdag = data[4].status === 1 ? data[4].openingstijd + ' - ' + data[4].sluitingstijd : 'Gesloten';
            let statusZaterdag = data[5].status === 1 ? data[5].openingstijd + ' - ' + data[5].sluitingstijd : 'Gesloten';
            let statusZondag = data[6].status === 1 ? data[6].openingstijd + ' - ' + data[6].sluitingstijd : 'Gesloten';

            this.setState({
                statusMaandag,
                statusDinsdag,
                statusWoensdag,
                statusDonderdag,
                statusVrijdag,
                statusZaterdag,
                statusZondag,
            })
        })
            .catch((error) => {
                console.log(error)
            })

        // The Roof
        axios.get(UrlService.TheRoofOpeningstijden(), {}).then(res => {
            const dataTheRoof = res.data

            // States
            let statusRoofMaandag = dataTheRoof[0].status === 1 ? dataTheRoof[0].openingstijd + ' - ' + dataTheRoof[0].sluitingstijd : 'Gesloten';
            let statusRoofDinsdag = dataTheRoof[1].status === 1 ? dataTheRoof[1].openingstijd + ' - ' + dataTheRoof[1].sluitingstijd : 'Gesloten';
            let statusRoofWoensdag = dataTheRoof[2].status === 1 ? dataTheRoof[2].openingstijd + ' - ' + dataTheRoof[2].sluitingstijd : 'Gesloten';
            let statusRoofDonderdag = dataTheRoof[3].status === 1 ? dataTheRoof[3].openingstijd + ' - ' + dataTheRoof[3].sluitingstijd : 'Gesloten';
            let statusRoofVrijdag = dataTheRoof[4].status === 1 ? dataTheRoof[4].openingstijd + ' - ' + dataTheRoof[4].sluitingstijd : 'Gesloten';
            let statusRoofZaterdag = dataTheRoof[5].status === 1 ? dataTheRoof[5].openingstijd + ' - ' + dataTheRoof[5].sluitingstijd : 'Gesloten';
            let statusRoofZondag = dataTheRoof[6].status === 1 ? dataTheRoof[6].openingstijd + ' - ' + dataTheRoof[6].sluitingstijd : 'Gesloten';

            this.setState({
                statusRoofMaandag,
                statusRoofDinsdag,
                statusRoofWoensdag,
                statusRoofDonderdag,
                statusRoofVrijdag,
                statusRoofZaterdag,
                statusRoofZondag,
            })
        })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getOpeningstijden();
    }

    render() {
        return (
            <section className="contact">
                <Header/>
                <article className="contact__content">
                    <section className="contact__info">
                        <h1 className="contact__title">Openingstijden</h1>
                    </section>
                    <div className="contact__openingstijden">
                        <section>
                            <h3 className="contact__subtitle">Binnentuin</h3>
                            <table className="table">
                                <tbody className="table__body">
                                <tr>
                                    <th className="table__day contact__text">Maandag</th>
                                    <td className="table__time contact__text">{this.state.statusMaandag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Dinsdag</th>
                                    <td className="table__time contact__text">{this.state.statusDinsdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Woensdag</th>
                                    <td className="table__time contact__text">{this.state.statusWoensdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Donderdag</th>
                                    <td className="table__time contact__text">{this.state.statusDonderdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Vrijdag</th>
                                    <td className="table__time contact__text">{this.state.statusVrijdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Zaterdag</th>
                                    <td className="table__time contact__text">{this.state.statusZaterdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Zondag</th>
                                    <td className="table__time contact__text">{this.state.statusZondag}</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                        <section>
                            <h3 className="contact__subtitle">The Roof</h3>
                            <table className="table">
                                <tbody className="table__body">
                                <tr>
                                    <th className="table__day contact__text">Maandag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofMaandag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Dinsdag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofDinsdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Woensdag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofWoensdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Donderdag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofDonderdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Vrijdag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofVrijdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Zaterdag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofZaterdag}</td>
                                </tr>
                                <tr>
                                    <th className="table__day contact__text">Zondag</th>
                                    <td className="table__time contact__text">{this.state.statusRoofZondag}</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                        <section className="contact__info">
                            <h1 className="contact__title">Contact</h1>
                        </section>
                        <section>
                            <h3 className="contact__subtitle">Adres</h3>
                            <p className="contact__text"> Langegracht 70 (2e verdieping en daktuin)</p>
                            <p className="contact__text"> 2312 NV, Leiden</p>
                            <p className="contact__text"> kvk: 66755204</p>
                        </section>
                    <section className="contact__phone">
                        <h3 className="contact__subtitle">Telefoonnummer</h3>
                        <p className="contact__text"> 06-81278152</p>
                    </section>
                </article>
            </section>
        );
    }
}

export default ContactPage;
