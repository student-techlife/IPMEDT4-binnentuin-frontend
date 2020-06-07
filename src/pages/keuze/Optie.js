import React from 'react';
import logo_white from '../../img/logo_white.png';
import './Keuze.scss';

class Optie extends React.Component {

    onOptieClicked = () => {
        this.props.optieClicked(this.props.id);
    }

    render(){
        return (
            <article className="optie">
                <section className="optie__knop" onClick = {this.onOptieClicked}>
                    <p> {this.props.content || "debug"} </p>
                    {this.props.title === "De Binnentuin" ? <img src={logo_white}/> : <h2>{this.props.title}</h2>}
                </section>
                <p>&#x1F550; Geopend: 8.30 &mdash; 17.00</p>
            </article>
        );
    }
}

export default Optie;
