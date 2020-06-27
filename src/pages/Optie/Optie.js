import React from 'react';
import logo_white from '../../assets/img/logo_white.png';
import './Optie.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

class Optie extends React.Component {

    onOptieClicked = () => {
        this.props.optieClicked(this.props.id);
    }

    render(){
        return (
            <article className="optie">
                <section className={this.props.status == "Geopend" ?  "optie__knop" : "optie__knop optie__knop--disabled"} onClick = {this.onOptieClicked}>
                {this.props.content ? <p>{this.props.content}</p> : null}
                    {this.props.title === "De Binnentuin" ? <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/> : <h2>{this.props.title}</h2>}
                </section>
                <p><span className="optie__tijd" role="img" aria-label="time"><FontAwesomeIcon icon={faClock}/> {this.props.status}: {this.props.openingstijd} &mdash; {this.props.sluitingstijd}</span></p>
            </article>
        );
    }
}

export default Optie;
