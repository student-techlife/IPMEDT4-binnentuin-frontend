import React from "react";
import logo_white from '../../img/logo_white.png';
import './Tijd.scss';

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

          <header className="header">
            <section className="container">
              <figure className="header__figure">
                <img src={logo_white} alt="Logo van Ruben en Jerry's eetcafé de Binnentuin"/>
              </figure>
            </section>
          </header>
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
          <footer className="footer">
            <section className="footer__adres">
              <p>Langegracht 70, Leiden</p>
              <p>2e verdieping PLNT en daktuin</p>
            </section>
            <section className="footer__social">
              {/* Facebook, Twitter, Instagram */}
            </section>
          </footer>

        </section>
      );
    }
}

export default TijdPage;
