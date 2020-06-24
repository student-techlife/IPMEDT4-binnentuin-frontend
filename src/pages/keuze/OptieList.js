import React from 'react';
import Optie from './Optie';
import {Link} from "react-router-dom";


class OptieList extends React.Component {

    optieClicked = (id) => {
        this.props.optieClicked(id);
    }

    render(){
        return(
            <section className="opties--container">
              <Link className="opties" to="../pretest/">
                <Optie title="De Binnentuin"
                  content="Eetcafé"
                  id="Binnentuin"
                  optieClicked={this.optieClicked}
                  />
              </Link>
              <Link className="opties" to="../pretest/">
                <Optie title="The Roof"
                        content="Daktuin"
                        id="The Roof"
                        optieClicked={this.optieClicked}
                />
              </Link>
              <Link className="opties" to="../pretest/">
                <Optie title="Ophalen"
                        content=""
                        id="Ophalen"
                        optieClicked={this.optieClicked}
                />
            </Link>
            </section>
        );
    }
}

export default OptieList;
