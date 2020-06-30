import React from "react";
import Card from "./Card";

import axios from "axios";
import UrlService from "../../../services/UrlService";

class CardList extends React.Component {

  cardClicked = (id) => {
    this.props.cardClicked(id);
  }

  constructor(props) {
    super(props);
    this.state = {
        Elements: []
    };
  }

  getProductsData() {
    axios.get(UrlService.BinnentuinMenu("snacks"), {}).then(res => {
      const data = res.data
      console.log(data)
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img="https://drazero.nl/binnentuin/1.jpg"
              cardClicked={this.cardClicked}
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

export default CardList;
