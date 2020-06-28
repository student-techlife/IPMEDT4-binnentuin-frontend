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
            default:
                nummer = 0;
                break;
        }

        // De Binnentuin
        axios.get(`https://admin.binnentuin.live/api/openingstijden_binnentuin`, {}).then(res => {
            const data = res.data

            let status = data[nummer].status
            const openingstijd = data[nummer].openingstijd
            const sluitingstijd = data[nummer].sluitingstijd

            let d = new Date();

            let tijdOpen = openingstijd[0] + openingstijd[1] + openingstijd[3] + openingstijd[4]
            let tijdDicht = sluitingstijd[0] + sluitingstijd[1] + sluitingstijd[3] + sluitingstijd[4]
            let tijdEcht = d.getHours().toString() + d.getMinutes().toString();

            console.log(tijdOpen);
            console.log(tijdDicht);
            console.log(tijdEcht);

            if (status === 1) { // Als status van huidige dag 1 (OPEN) is

                if(tijdEcht > tijdOpen && tijdEcht < tijdDicht){
                    console.log("OPEN");
                } else {
                    console.log("GESLOTEN");
                    status = 0;
                }

            }

            // console.log(d.getHours());
            // console.log(d.getMinutes());
            
            // console.log(openingstijd[0] + openingstijd[1]); //eerste 2 cijfers
            // console.log(openingstijd[3] + openingstijd[4]); // laatste 2 cijfers
            

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

            const status2 = dataTheRoof[nummer].status
            const openingstijd2 = dataTheRoof[nummer].openingstijd
            const sluitingstijd2 = dataTheRoof[nummer].sluitingstijd

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
                        status={this.state.status === 1 ? "Geopend" + ":" : "Gesloten"}
                        openingstijd={this.state.status === 1 ? this.state.openingstijd + " -" : ""}
                        sluitingstijd={this.state.status === 1 ? this.state.sluitingstijd : ""}
                        optieClicked={this.optieClicked}
                    />
                </Link>
                <Link className="opties__link" to="/pretest">
                    <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        status={this.state.status2 === 1 ? "Geopend" : "Gesloten"}
                        openingstijd={this.state.status2 === 1 ? this.state.openingstijd2 + " -" : ""}
                        sluitingstijd={this.state.status2 === 1 ? this.state.sluitingstijd2 : ""}
                        optieClicked={this.optieClicked}
                    />
                </Link>
            </section>
        );
    }
}

export default OptieList;
