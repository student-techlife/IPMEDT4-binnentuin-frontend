import React from "react";
import logo_white from '../../img/logo_white.png';
import './Pretest.scss';

import {faCheck, faHandsWash, faPeopleArrows, faSoap} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class PretestPage extends React.Component {

    render() {
        return (
            <section className="pretest">
                {/*TODO: Dit moet apart gezet worden!*/}
                <header className="header">
                    <section className="container">
                        <figure className="header__figure">
                            <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
                        </figure>
                    </section>
                </header>
                <article className="pretest__content">
                    <section className="pretest__info">
                        <h1 className="prestest__title">
                            <span className="pretest__title pretest__title--normal">Pré controle</span>
                            <span className="pretest__title pretest__title--bold">Covid-19</span></h1>
                        <p className="pretest__subtitle">Als binnentuin zorgen wij ervoor dat: </p>
                        <ul className="pretest__list">
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon" icon={faHandsWash} /><p
                                className="pretest__text">Wassen en ontsmetten onze handen na elke bestelling</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon" icon={faPeopleArrows} /><p
                                className="pretest__text">Waarborgen de 1,5 meter afstand</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon" icon={faPeopleArrows} /><p
                                className="pretest__text">Serveren en ruimen af op minimaal 1,5 meter afstand</p></li>
                            <li className="pretest__listitem"><FontAwesomeIcon className="pretest__list-icon" icon={faSoap} /><p
                                className="pretest__text">Zorgen voor een grondige reinging van o.a. tafels, stoelen en
                                menukaarten</p></li>
                        </ul>
                    </section>
                    <section className="pretest__checklist">
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
                </article>


            </section>

        );
    }
}

export default PretestPage;