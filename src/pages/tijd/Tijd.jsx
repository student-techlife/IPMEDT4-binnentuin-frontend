import React from "react";
import './Tijd.scss';

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

class TijdPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value: 'coconut',
    lists: [{id: "1", tijd:'12:00-12:30'},
            {id: "2", tijd:'12:30-13:00'},
            {id: "3", tijd:'13:00-13:30'},
    ]
  };

  this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit(event) {
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}

handleChange = event => {
  this.setState({value: event.target.value});
}

    render() {
      return(
        <section className="tijd">
          <Header />

          <article className="reserveren">
            <section className="reserveren__heading">
              <h1>&#8635;<span className="reserveren__heading--gold">Tijd reserveren</span></h1>
              <form className="reserveren__form" onSubmit={this.handleSubmit}>
                <label>
                  <select className="reserveren__form--dropdown" value={this.state.value} onChange={this.handleChange}>
                    {this.state.lists.map(tijd => (
                      <option key={tijd.id} value={tijd.tijd}>
                      {tijd.tijd}
                      </option>
                    ))}
                  </select>
                </label>
                  <input type="submit" value="Submit" />
                </form>
            </section>
          </article>

          <Footer />
        </section>
      );
    }
}

export default TijdPage;
