import React from "react";
import './Pretest.scss';
import {Link} from "react-router-dom";

import Header from "../../components/header/Header";

import {faCheck, faHandsWash, faPeopleArrows, faSoap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Optie from "../Optie/Optie";


class PretestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTijd: '12:00-12:30',
            tijden: [{id: "1", tijd: '12:00-12:30'},
                {id: "2", tijd: '12:30-13:00'},
                {id: "3", tijd: '13:00-13:30'},
            ],
            pretest: false,
            time: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBinnentuinClicked = this.onBinnentuinClicked.bind(this);
        this.onAfhalenClicked = this.onAfhalenClicked.bind(this);
    }

    handleSubmit(event) {
        alert('De tijd van jou reservering is ' + this.state.activeTijd);
        event.preventDefault();
    }

    onBinnentuinClicked(event) {
        this.setState({
            pretest: true,
            time: true
        })
    }

    onAfhalenClicked(event) {
        this.setState({
            pretest: false,
            time: true
        })


    }

    handleChange = event => {
        this.setState({activeTijd: event.target.value});
    }

    render() {
        return (
            <section className="pretest">
                <Header/>
                <article className="choice__content">
                    <section>
                        <p className="choice__subtitle">Wilt u uw eten afhalen of op locatie eten</p>
                    </section>
                    <section className=" opties">
                        <Optie title="De Binnentuin"
                               content="Eetcafé"
                               id="Binnentuin"
                               optieClicked={this.onBinnentuinClicked}
                        />
                        <Optie title="Afhalen"
                               content=" "
                               id="Afhalen"
                               optieClicked={this.onAfhalenClicked}
                        />
                    </section>
                </article>

                <article className="pretest__content">
                    <section style={{display: this.state.pretest ? 'block' : 'none'}} className="pretest__info">
                        <h1 className="prestest__title">
                            <span className="pretest__title pretest__title--normal">Pré controle</span>
                            <span className="pretest__title pretest__title--bold">Covid-19</span></h1>
                        <p className="pretest__subtitle">Als binnentuin zorgen wij ervoor dat: </p>
                        <ul className="pretest__list">
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon"
                                                                               icon={faHandsWash}/><p
                                className="pretest__text">Wassen en ontsmetten onze handen na elke bestelling</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon"
                                                                               icon={faPeopleArrows}/><p
                                className="pretest__text">Waarborgen de 1,5 meter afstand</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon"
                                                                               icon={faPeopleArrows}/><p
                                className="pretest__text">Serveren en ruimen af op minimaal 1,5 meter afstand</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon"
                                                                               icon={faSoap}/><p
                                className="pretest__text">Zorgen voor een grondige reinging van o.a. tafels, stoelen en
                                menukaarten</p></li>
                        </ul>
                    </section>
                    <section style={{display: this.state.pretest ? 'block' : 'none'}} className="pretest__checklist">
                        <h2 className="pretest__secundarytitle">Checklist</h2>
                        <p className="pretest__text">Met hoeveel personen wilt u komen?</p>
                        <input className="pretest__amount" type="numeric" placeholder="1"/>
                        <p className="pretest__text">Heeft u of een huisgenoot last gehad van hoesten, neusverkoudheid,
                            benauwdheidsklachten of koorts vanaf 38 graden?</p>
                        <fieldset className="pretest__checkboxes">
                            <div className="pretest__checkbox-field">
                                <input id="ja" className="pretest__checkbox" name="choice" type="radio"/>
                                <label className="pretest__checkbox-box" htmlFor="ja"><FontAwesomeIcon icon={faCheck}/></label>
                                <label className="pretest__checkbox-label" htmlFor="ja">Ja</label>
                            </div>
                            <div className="pretest__checkbox-field">
                                <input checked id="nee" className="pretest__checkbox" name="choice" type="radio"/>
                                <label className="pretest__checkbox-box" htmlFor="nee"><FontAwesomeIcon icon={faCheck}/></label>
                                <label className="pretest__checkbox-label" htmlFor="nee">Nee</label>
                            </div>
                        </fieldset>
                    </section>
                    <section className="pretest__reserveren"
                             style={{display: this.state.time ? 'block' : 'none'}}>
                        <h2 className="pretest__secundarytitle__reserveren">&#8635;<span
                            className="pretest__secundarytitle__reserveren--gold">  Tijd reserveren</span></h2>
                        <p className="pretest__text__reserveren">U kunt een plek in het restaurant reserveren. Dit houdt
                            in dat er een
                            plek vrijgehouden wordt gedurende het gekozen tijdstip. Op locatie kunt u uw stoel/ tafel
                            kiezen.</p>
                        <label>
                            <select className="pretest__dropdown" value={this.state.activeTijd}
                                    onChange={this.handleChange}>
                                {this.state.tijden.map(tijd => (
                                    <option key={tijd.id} value={tijd.tijd}>
                                        {tijd.tijd}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </section>
                    <section style={{display: this.state.time ? 'block' : 'none'}}>
                        <form className="pretest__button" onSubmit={this.handleSubmit}><Link to="../binnentuin/menu">
                            <input className="pretest__button__input" type="submit" value="Reservering bevestigen"/></Link>
                        </form>
                    </section>
                </article>
            </section>
        );
    }
}

export default PretestPage;
