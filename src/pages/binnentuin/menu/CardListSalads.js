import React from "react";
import Card from "./Card";

import axios from "axios";
import UrlService from "../../../services/UrlService";

class CardListSalads extends React.Component {

  cardSaladClicked = (id) => {
    this.props.cardSaladClicked(id);
  }

  constructor(props) {
    super(props);
    this.state = {
        Elements: []
    };
  }

  getProductsData() {
    axios.get(UrlService.BinnentuinMenu("salads"), {}).then(res => {
      const data = res.data
      console.log(data)
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img={u.img}
              cardClicked={this.cardSaladClicked}
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

export default CardListSalads;
