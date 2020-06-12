import React from "react";



class Card extends React.Component {

  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  }

  render() {
    return (
      <article className="card">
        <figure>
          <img className="card__img" src={this.props.img} alt={this.props.title} />
        </figure>
        <header className="card__header">
          <h2> {this.props.title || "Gerecht met ingredienten xxxx"} </h2>
        </header>
        <section className="card__content">
          <p> {this.props.content || "Prijs"} </p>
        </section>
        <button className="card__button" onClick={this.onCardClicked}>{this.props.buttonText || "+"}</button>
      </article>
    );
  }
}

export default Card;