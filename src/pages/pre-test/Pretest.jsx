import React from "react";
import './Pretest.scss';

import Header from "../../components/header/Header";
import UrlService from "../../services/UrlService";
// import Optie from "../Optie/Optie";


import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHandsWash, faPeopleArrows, faSoap } from "@fortawesome/free-solid-svg-icons";
import logo_white from "../../assets/img/logo_white.png";
import { Redirect } from "react-router-dom";

class PretestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'hallo',
            alles: [],
            activeTijd: '12:00-12:30',
            symptoms: "0",
            time: "",
            name: "",
            persons: "",
            pretestComponent: false,
            timeComponent: false,
            error: null,
            redirect: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBinnentuinClicked = this.onBinnentuinClicked.bind(this);
        this.onAfhalenClicked = this.onAfhalenClicked.bind(this);
        this.onTimeChanged = this.onTimeChanged.bind(this);
        this.onSymptomsChanged = this.onSymptomsChanged.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onPersonsChanged = this.onPersonsChanged.bind(this);
    }

    componentDidMount() {
        axios.get(UrlService.ReserveerTijden(), {}).then(res => {
            const alles = res.data;
            let time = alles[0].openingstijd + " - " + alles[0].sluitingstijd;
            this.setState({ alles, time });
        })
    }

    onBinnentuinClicked(event) {
        this.setState({
            pretestComponent: true,
            timeComponent: true
        })
    }

    onAfhalenClicked(event) {
        this.setState({
            pretestComponent: false,
            timeComponent: true
        })
    }

    onNameChanged(event) {
        this.setState({
            name: event.target.value
        })
    }

    onPersonsChanged(event) {
        this.setState({
            persons: event.target.value
        })
    }

    onSymptomsChanged(event) {
        this.setState({
            symptoms: event.target.value
        })
    }

    onTimeChanged(event) {
        this.setState({
            time: event.target.value
        })
    }



    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);

        axios.post(UrlService.StorePretestSubmission(), data)
            .then(data => {
                if (data.status === 200) {
                    this.setState({
                        redirect: "/binnentuin/menu"
                    })
                }
            })
            .catch(error => {
                if (error.request) {
                    const data = JSON.parse(error.request.response);
                    this.setState({
                        error: data.message
                    })
                }
            })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <section className="pretest">
                <Header/>
                <article className="choice__content">
                    <section>
                        <h1 className="choice__subtitle">Wilt u uw eten afhalen of op locatie eten?</h1>
                        <p className="choice__text">Komt u gezellig zitten in ons met planten gevulde café om heerlijk te lunchen of te genieten van fantastische koffie? Het is ook mogelijk om uw bestelling slechts af te halen om vanuit huis of kantoor te genieten van bijvoorbeeld onze wisselende daghap.</p>
                    </section>
                    <section className="container opties">
                        <article className="optie">
                            <section className="optie__knop" onClick = {this.onBinnentuinClicked}>
                                <p>Eetcafé</p>
                                <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                            </section>
                        </article>
                        <article className="optie">
                            <section className="optie__knop"
                                    onClick = {this.onAfhalenClicked}>
                                <h2>Afhalen</h2>
                            </section>
                        </article>
                    </section>
                </article>

                <article className="pretest__content">
                    <form onSubmit={this.handleSubmit}>
                        <section style={{display: this.state.pretestComponent ? 'block' : 'none'}} className="pretest__info">
                            <h1 className="prestest__title">
                                <span className="pretest__title pretest__title--normal">Pré controle</span>
                                <span className="pretest__title pretest__title--bold">Covid-19</span></h1>
                            <p className="pretest__subtitle">Als binnentuin zorgen wij ervoor dat: </p>
                            <ul className="pretest__list">
                                <li className="pretest__listitem">
                                    <FontAwesomeIcon className="pretest__list-icon" icon={faHandsWash}/>
                                    <p className="pretest__text">Wassen en ontsmetten onze handen na elke bestelling</p>
                                </li>
                                <li className="pretest__listitem">
                                    <FontAwesomeIcon className="pretest__list-icon" icon={faPeopleArrows}/>
                                    <p className="pretest__text">Waarborgen de 1,5 meter afstand</p>
                                </li>
                                <li className="pretest__listitem">
                                    <FontAwesomeIcon className="pretest__list-icon" icon={faPeopleArrows}/>
                                    <p className="pretest__text">Serveren en ruimen af op minimaal 1,5 meter afstand</p>
                                </li>
                                <li className="pretest__listitem">
                                    <FontAwesomeIcon className="pretest__list-icon" icon={faSoap}/>
                                    <p className="pretest__text">Zorgen voor een grondige reinging van o.a. tafels,
                                        stoelen en menukaarten</p>
                                </li>
                            </ul>
                        </section>

                        <section style={{display: this.state.timeComponent ? 'block' : 'none'}} className="pretest__nameform">
                          <h2 className="pretest__secundarytitle">Contact</h2>
                          <p className="pretest__text">Wat is uw naam?</p>
                          <input className="pretest__amount"
                                 type="string"
                                 placeholder="Naam"
                                 name="name"
                                 id="name"
                                 value={this.state.name}
                                 onChange={this.onNameChanged}/>
                        </section>

                        <section style={{display: this.state.pretestComponent ? 'block' : 'none'}}
                                 className="pretest__checklist">
                            <h2 className="pretest__secundarytitle">Checklist</h2>
                            <p className="pretest__text">Met hoeveel personen wilt u komen?</p>
                            <input className="pretest__amount"
                                   type="numeric"
                                   placeholder="Aantal"
                                   name="persons"
                                   id="persons"
                                   value={this.state.persons}
                                   onChange={this.onPersonsChanged}/>
                            {this.state.error && this.state.error.persons ? <p className="error__message">{this.state.error.persons}</p> : null}
                            <p className="pretest__text">Heeft u of een huisgenoot last gehad van hoesten,
                                neusverkoudheid,
                                benauwdheidsklachten of koorts vanaf 38 graden?</p>
                            <fieldset className="pretest__checkboxes">
                                <div className="pretest__checkbox-field">
                                    <input id="ja"
                                           className="pretest__checkbox"
                                           name="symptoms"
                                           checked={this.state.symptoms === "1"}
                                           onChange={this.onSymptomsChanged}
                                           type="radio"
                                           value="1"/>
                                    <label className="pretest__checkbox-box" htmlFor="ja"><FontAwesomeIcon
                                        icon={faCheck}/></label>
                                    <label className="pretest__checkbox-label" htmlFor="ja">Ja</label>
                                </div>
                                {this.state.error && this.state.error.symptoms ? <p className="error__message">{this.state.error.symptoms}</p> : null}
                                <div className="pretest__checkbox-field">
                                    <input checked={this.state.symptoms === "0"}
                                           onChange={this.onSymptomsChanged}
                                           id="nee"
                                           className="pretest__checkbox"
                                           name="symptoms"
                                           type="radio"
                                           value="0"/>
                                    <label className="pretest__checkbox-box" htmlFor="nee"><FontAwesomeIcon
                                        icon={faCheck}/></label>
                                    <label className="pretest__checkbox-label" htmlFor="nee">Nee</label>
                                </div>
                            </fieldset>
                        </section>
                        <section className="pretest__reserveren"
                                 style={{display: this.state.timeComponent ? 'block' : 'none'}}>
                            <h2 className="pretest__secundarytitle__reserveren">&#8635;<span
                                className="pretest__secundarytitle__reserveren--gold">  Tijd reserveren</span></h2>
                            <p className="pretest__text__reserveren">U kunt een plek in het restaurant reserveren. Dit
                                houdt
                                in dat er een
                                plek vrijgehouden wordt gedurende het gekozen tijdstip. Op locatie kunt u uw stoel/
                                tafel
                                kiezen.</p>
                            <label>
                                <select className="pretest__dropdown"
                                        value={this.state.time}
                                        onChange={this.onTimeChanged}
                                        name="reservation_time"
                                        id="reservation_time">
                                    {this.state.alles.map(tijd => (
                                        <option key={tijd.id} value={tijd.openingstijd + " - " + tijd.sluitingstijd}>
                                            {tijd.openingstijd + " - " + tijd.sluitingstijd}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            {this.state.error && this.state.error.symptoms ? <p className="error__message">{this.state.error.symptoms}</p> : null}
                        </section>
                        <input type='submit' className="pretest__button" style={{display: this.state.timeComponent ? 'block' : 'none'}}/>
                    </form>
                </article>
            </section>
        );
    }
}

export default PretestPage;
