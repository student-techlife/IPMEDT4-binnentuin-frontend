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

            if (status === 1) { // Als status van huidige dag 1 (OPEN) is

                if(tijdEcht >= tijdOpen && tijdEcht <= tijdDicht){ // Als de echte tijd groter / later is dan openingstijdtijd en kleiner / eerder dan sluitingstijd
                    status = 1; // Status is 1
                } else {
                    status = 0; // Anders status wordt 0
                }

            }

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

            let status2 = dataTheRoof[nummer].status
            const openingstijd2 = dataTheRoof[nummer].openingstijd
            const sluitingstijd2 = dataTheRoof[nummer].sluitingstijd

            let d = new Date();

            let tijdOpen = openingstijd2[0] + openingstijd2[1] + openingstijd2[3] + openingstijd2[4]
            let tijdDicht = sluitingstijd2[0] + sluitingstijd2[1] + sluitingstijd2[3] + sluitingstijd2[4]
            let tijdEcht = d.getHours().toString() + d.getMinutes().toString();

            if (status2 === 1) { // Als status van huidige dag 1 (OPEN) is

                if(tijdEcht >= tijdOpen && tijdEcht <= tijdDicht){ // Als de echte tijd groter / later is dan openingstijdtijd en kleiner / eerder dan sluitingstijd
                    status2 = 1; // Status is 1
                } else {
                    status2 = 0; // Anders status wordt 0
                }

            }

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
        const BinnentuinWrap = ({children}) => this.state.status === 1 ? 
        <Link className="opties__link" to="/pretest">{children}</Link> : 
        children;

        const RoofWrap = ({children}) => this.state.status2 === 1 ? 
        <Link className="opties__link" to="/pretest">{children}</Link> : 
        children;

        return(
            <section className="opties opties--3 container">

                <BinnentuinWrap>
                    <Optie title="De Binnentuin"
                        content="Eetcafé"
                        id="Binnentuin"
                        status={this.state.status === 1 ? "Geopend:" : "Gesloten"}
                        openingstijd={this.state.status === 1 ? this.state.openingstijd + " -" : null}
                        sluitingstijd={this.state.status === 1 ? this.state.sluitingstijd : null}
                        optieClicked={this.optieClicked}
                    />
                </BinnentuinWrap>

                <RoofWrap>
                    <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        status={this.state.status2 === 1 ? "Geopend:" : "Gesloten"}
                        openingstijd={this.state.status2 === 1 ? this.state.openingstijd2 + " -" : null}
                        sluitingstijd={this.state.status2 === 1 ? this.state.sluitingstijd2 : null}
                        optieClicked={this.optieClicked}
                    />
                </RoofWrap>
                
            </section>
        );
    }
}

export default OptieList;
