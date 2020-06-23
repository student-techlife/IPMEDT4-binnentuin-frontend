import React from "react";



class TijdCard extends React.Component {

  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  }

  render() {
    return (
      <article className="tafel__card">
          <button className="tafel__card__button" onClick={this.onCardClicked}>
          <h2> {this.props.title || "Gerecht met ingredienten xxxx"} </h2>
          {this.props.buttonText}</button>
      </article>
    );
  }
}

export default TijdCard;
