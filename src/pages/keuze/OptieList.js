import React from 'react';
import Optie from '../Optie/Optie';
import {Link} from "react-router-dom";

class OptieList extends React.Component {

    optieClicked = (id) => {
        this.props.optieClicked(id);
    }

    render(){
        return(
            <section className="opties opties--3 container">
                <Link className="opties__link" to="/pretest">
                    <Optie title="De Binnentuin"
                        content="Eetcafé"
                        id="Binnentuin"
                        optieClicked={this.optieClicked}
                    />
                </Link>
                <Link className="opties__link" to="/pretest">
                    <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        optieClicked={this.optieClicked}
                    />
                </Link>
            </section>
        );
    }
}

export default OptieList;
