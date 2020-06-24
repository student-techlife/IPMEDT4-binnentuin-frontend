import React from "react";
import TijdCard from "./TijdCard";

class TijdCardList extends React.Component {

  cardClicked = (id) => {
    this.props.cardClicked(id);
  }

  render() {
    return (
      <section className="tafel__card__container">
        <TijdCard title="3"
              id="1"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="4"
              id="2"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="5"
              id="3"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="8"
              id="4"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="4"
              id="5"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="3"
              id="6"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="4"
              id="7"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="7"
              id="8"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="2"
              id="9"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="6"
              id="10"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="5"
              id="11"
              cardClicked={this.cardClicked}
        />
        <TijdCard title="10"
              id="12"
              cardClicked={this.cardClicked}
        />
      </section>
    );
  }
}

export default TijdCardList;
