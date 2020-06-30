import React from "react";



class Card extends React.Component {

  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  }

  render() {
    return (
      <article className="card__container">
        <article className="card">
          <figure className="card__figure">
            <img className="card__figure__img" src={this.props.img} alt={this.props.title} />
          </figure>
          <header className="card__header">
            <h2> {this.props.title || "Gerecht met ingredienten xxxx"} </h2>
            <h2> {this.props.desc || "Gerecht met ingredienten xxxx"} </h2>
          </header>
          <section className="card__content">
            <p> {this.props.content || "Prijs"} </p>
          </section>
          <button className="card__button" onClick={this.onCardClicked}>{this.props.buttonText || "+"}</button>
        </article>
      </article>
    );
  }
}

export default Card;
