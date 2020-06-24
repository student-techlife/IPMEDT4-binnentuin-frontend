import React from "react";
import Card from "./Card";

import axios from "axios";

class CardListToasts extends React.Component {

  cardToastClicked = (id) => {
    this.props.cardToastClicked(id);
  }

  constructor(props) {
    super(props);
    this.state = {
        Elements: []
    };
  }

  getProductsData() {
    axios.get(`https://admin.binnentuin.live/api/producten/toasts`, {}).then(res => {
      const data = res.data
      console.log(data)
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardToastClicked}
              key={u.id}
        />
      )

      this.setState({
        producten
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.getProductsData();
  }

  render() {
    return (
      <section className="cards">
        {this.state.producten}
      </section>
    );
  }
}

export default CardListToasts;
