import React from 'react';
import Optie from './Optie';

class OptieList extends React.Component {

    optieClicked = (id) => {
        this.props.optieClicked(id);
    }

    render(){
        return(
            <section className="opties container">
                <Optie title="De Binnentuin"
                        content="Eetcafé"
                        id="Binnentuin"
                        optieClicked={this.optieClicked}
                />
                <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        optieClicked={this.optieClicked}
                />
                <Optie title="Ophalen"
                        content=""
                        id="Ophalen"
                        optieClicked={this.optieClicked}
                />
            </section>
        );
    }
}

export default OptieList;
