import React from "react";
import './Tijd.scss';
import CardList from "../../pages/tijd/TijdCardList";


import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

class TijdPage extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    activeTijd: '12:00-12:30',
    tijden: [{id: "1", tijd:'12:00-12:30'},
            {id: "2", tijd:'12:30-13:00'},
            {id: "3", tijd:'13:00-13:30'},
    ] };

  this.handleSubmit = this.handleSubmit.bind(this);

  }
  cardClicked = (id) => {
    console.log(`Tafel ${id} is geselecteerd.`);
    alert(`Je hebt tafel ${id} geselecteerd!`);

  }

  handleSubmit(event) {
    alert('De tijd van jou reservering is ' + this.state.activeTijd);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({activeTijd: event.target.value});
  }

    render() {
      return(
        <section className="tijd">
          <Header />

          <article className="reserveren">
            <section className="reserveren__heading">
              <h1>&#8635;<span className="reserveren__heading--gold">  Tijd reserveren</span></h1>
                <label>
                  <select className="reserveren__dropdown" value={this.state.activeTijd} onChange={this.handleChange}>
                    {this.state.tijden.map(tijd => (
                      <option key={tijd.id} value={tijd.tijd}>
                      {tijd.tijd}
                      </option>
                    ))}
                  </select>
                </label>
            </section>
            <section>
              <h1><img src="https://img.icons8.com/metro/26/000000/sofa.png"/>
                <span className="reserveren__heading--gold">  Plek reserveren</span>
              </h1>
          
              <CardList cardClicked = {this.cardClicked} />
            </section>
            <section>
              <form className="reserveren__button" onSubmit={this.handleSubmit}>
                <input className="reserveren__button__input" type="submit" value="Reservering bevestigen" />
              </form>
            </section>
          </article>
          <Footer />
        </section>
      );
    }
}

export default TijdPage;
