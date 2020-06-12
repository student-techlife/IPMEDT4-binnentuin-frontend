import React from "react";
import Card from "./Card";

class CardList extends React.Component {

  cardClicked = (id) => {
    this.props.cardClicked(id);
  }

  render() {
    return (
      <section className="cards">
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="1"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
        <Card title="Dailty two pieces of fruit"
              content="€4,-"
              buttonText="+"
              id="2"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="3"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="4"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="5"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
        <Card title="Organic yoghurt with granola & jam"
              content="€4,-"
              buttonText="+"
              id="6"
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardClicked}
        />
      </section>
    );
  }
}

export default CardList;
