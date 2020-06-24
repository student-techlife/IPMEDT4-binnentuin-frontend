import React from 'react';
import logo_white from '../../assets/img/logo_white.png';
import './Optie.scss';

class Optie extends React.Component {

    onOptieClicked = () => {
        this.props.optieClicked(this.props.id);
    }

    render(){
        return (
            <article className="optie">
                <section className="optie__knop" onClick = {this.onOptieClicked}>
                {this.props.content ? <p>{this.props.content}</p> : null}
                    {this.props.title === "De Binnentuin" ? <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/> : <h2>{this.props.title}</h2>}
                </section>
                <p><span role="img" aria-label="time">&#x1F550; Geopend: 8.30 &mdash; 17.00</span></p>
            </article>
        );
    }
}

export default Optie;
