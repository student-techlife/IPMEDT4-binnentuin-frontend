import React from "react";
import './Pretest.scss';
import Header from "../../components/header/Header";
import UrlService from "../../services/UrlService";
import Optie from "../Optie/Optie";


import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faHandsWash, faPeopleArrows, faSoap, faHistory, faClipboard} from "@fortawesome/free-solid-svg-icons";

class PretestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          value: 'hallo',
          alles: [],
          pretest: false,
          time: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBinnentuinClicked = this.onBinnentuinClicked.bind(this);
        this.onAfhalenClicked = this.onAfhalenClicked.bind(this);
    }

    componentDidMount() {
      axios.get(UrlService.ReserveerTijden(), {}).then(res => {
          const alles = res.data;
          this.setState({ alles });
      })
    }
 
      handleChange = event => {
        this.setState({ value: event.target.value });
      };


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

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Todo: data.set(..., ...);
        for (var pair of data.entries()) {
            console.log(pair);
        }

        fetch('https://admin.binnentuin.live/api/pretest', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                // Todo: error handeling als er een error is.
                console.log(data);
            });
    }

    render() {
        return (
            <section className="pretest">
                <Header/>
                <article className="choice__content">
                    <section>
                        <h1 className="choice__subtitle">Wilt u uw eten afhalen of op locatie eten?</h1>
                        <p className="choice__text">Komt u gezellig zitten in ons met planten gevulde café om heerlijk te lunchen of te genieten van fantastische koffie? Het is ook mogelijk om uw bestelling slechts af te halen om vanuit huis of kantoor te genieten van bijvoorbeeld onze wisselende daghap.</p>
                    </section>
                    <section className="container opties">
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
                    <form onSubmit={this.handleSubmit}>
                        <section style={{display: this.state.pretest ? 'block' : 'none'}} className="pretest__info">
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
                        <section style={{display: this.state.pretest ? 'block' : 'none'}}
                                 className="pretest__checklist">
                            <h2 className="pretest__secundarytitle">Checklist</h2>
                            <p className="pretest__text">Met hoeveel personen wilt u komen?</p>
                            <input className="pretest__amount" type="numeric" placeholder="1" value="1" name="persons"
                                   id="persons"/>
                            <p className="pretest__text">Heeft u of een huisgenoot last gehad van hoesten,
                                neusverkoudheid,
                                benauwdheidsklachten of koorts vanaf 38 graden?</p>
                            <fieldset className="pretest__checkboxes">
                                <div className="pretest__checkbox-field">
                                    <input id="ja" className="pretest__checkbox" name="symptoms" type="radio"
                                           value="1"/>
                                    <label className="pretest__checkbox-box" htmlFor="ja"><FontAwesomeIcon
                                        icon={faCheck}/></label>
                                    <label className="pretest__checkbox-label" htmlFor="ja">Ja</label>
                                </div>
                                <div className="pretest__checkbox-field">
                                    <input checked id="nee" className="pretest__checkbox" name="symptoms" type="radio"
                                           value="0"/>
                                    <label className="pretest__checkbox-box" htmlFor="nee"><FontAwesomeIcon
                                        icon={faCheck}/></label>
                                    <label className="pretest__checkbox-label" htmlFor="nee">Nee</label>
                                </div>
                            </fieldset>
                        </section>
                        <section className="pretest__reserveren"
                                 style={{display: this.state.time ? 'block' : 'none'}}>
                            <h2 className="pretest__secundarytitle__reserveren">&#8635;<span
                                className="pretest__secundarytitle__reserveren--gold">  Tijd reserveren</span></h2>
                            <p className="pretest__text__reserveren">U kunt een plek in het restaurant reserveren. Dit
                                houdt
                                in dat er een
                                plek vrijgehouden wordt gedurende het gekozen tijdstip. Op locatie kunt u uw stoel/
                                tafel
                                kiezen.</p>
                            <label>
                                <select className="pretest__dropdown" value={this.state.activeTijd}
                                        onChange={this.handleChange} name="reservation_time" id="reservation_time">
                                    {this.state.tijden.map(tijd => (
                                        <option key={tijd.id} value={tijd.tijd}>
                                            {tijd.tijd}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </section>
                        <input type='submit' style={{display: this.state.time ? 'block' : 'none'}}/>
                    </form>
                </article>
            </section>
        );
    }
}

export default PretestPage;
