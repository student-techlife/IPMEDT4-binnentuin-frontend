import React from "react";
import Card from "./Card";

class CardListSalads extends React.Component {

  cardSaladClicked = (id) => {
    this.props.cardSaladClicked(id);
  }

  render() {
    return (
      <section className="cards">
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="7"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardSaladClicked}
        />
        <Card title="Dailty two pieces of fruit"
              content="€4,-"
              buttonText="+"
              id="8"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardSaladClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="9"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardSaladClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="10"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardSaladClicked}
        />
      </section>
    );
  }
}

export default CardListSalads;
