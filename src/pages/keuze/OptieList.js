import React from 'react';
import Optie from '../Optie/Optie';

import {Link} from "react-router-dom";
import axios from "axios";

class OptieList extends React.Component {

    optieClicked = (id) => {
        this.props.optieClicked(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            Openingstijden: []
        };
    }

    getOpeningstijden() {
        // De Binnentuin
        axios.get(`https://admin.binnentuin.live/api/openingstijden_binnentuin`, {}).then(res => {
            const data = res.data
            
            // Vraag de dag op en vertaal die naar een Nederlandse string
            const dag = new Date().toLocaleString('nl-nl', {  weekday: 'long' });

            // Zet variable nummer naar de index van de huidige dag om in api op te vragen
            let nummer = 0;
            switch(dag) {
                case 'maandag':
                    nummer = 0;
                    break;
                case 'dinsdag':
                    nummer = 1;
                    break;
                case 'woensdag':
                    nummer = 2;
                    break;
                case 'donderdag':
                    nummer = 3;
                    break;
                case 'vrijdag':
                    nummer = 4;
                    break;
                case 'zaterdag':
                    nummer = 5;
                    break;
                case 'zondag':
                    nummer = 6;
                    break;
            }

            const status = data[nummer].status
            const openingstijd = data[nummer].openingstijd
            const sluitingstijd = data[nummer].sluitingstijd

            this.setState({
                status,
                openingstijd,
                sluitingstijd,
            })
        })
        .catch((error) => {
            console.log(error)
        })

        // The Roof
        axios.get(`https://admin.binnentuin.live/api/openingstijden_theroof`, {}).then(res => {
            const dataTheRoof = res.data
            // Vraag de dag op en vertaal die naar een Nederlandse string
            const dag2 = new Date().toLocaleString('nl-nl', {  weekday: 'long' });

            // Zet variable nummer naar de index van de huidige dag om in api op te vragen
            let nummer2 = 0;
            switch(dag2) {
                case 'maandag':
                    nummer2 = 0;
                    break;
                case 'dinsdag':
                    nummer2 = 1;
                    break;
                case 'woensdag':
                    nummer2 = 2;
                    break;
                case 'donderdag':
                    nummer2 = 3;
                    break;
                case 'vrijdag':
                    nummer2 = 4;
                    break;
                case 'zaterdag':
                    nummer2 = 5;
                    break;
                case 'zondag':
                    nummer2 = 6;
                    break;
            }

            const status2 = dataTheRoof[nummer2].status
            const openingstijd2 = dataTheRoof[nummer2].openingstijd
            const sluitingstijd2 = dataTheRoof[nummer2].sluitingstijd

            this.setState({
                status2,
                openingstijd2,
                sluitingstijd2,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getOpeningstijden();
    }

    render(){
        return(
            <section className="opties opties--3 container">
                <Link className="opties__link" to="/pretest">
                    <Optie title="De Binnentuin"
                        content="Eetcafé"
                        id="Binnentuin"
                        status={this.state.status == 1 ? "Geopend" : "Gesloten"}
                        openingstijd={this.state.openingstijd}
                        sluitingstijd={this.state.sluitingstijd}
                        optieClicked={this.optieClicked}
                    />
                </Link>
                <Link className="opties__link" to="/pretest">
                    <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        status={this.state.status2 == 1 ? "Geopend" : "Gesloten"}
                        openingstijd={this.state.openingstijd2}
                        sluitingstijd={this.state.sluitingstijd2}
                        optieClicked={this.optieClicked}
                    />
                </Link>
            </section>
        );
    }
}

export default OptieList;
