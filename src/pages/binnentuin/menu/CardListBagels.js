import React from "react";
import Card from "./Card";

import axios from "axios";
import UrlService from "../../../services/UrlService";

class CardListBagels extends React.Component {

  cardBagelClicked = (id) => {
    this.props.cardBagelClicked(id);
  }

  constructor(props) {
    super(props);
    this.state = {
        Elements: []
    };
  }

  getProductsData() {
    axios.get(UrlService.BinnentuinMenu("bagels"), {}).then(res => {
      const data = res.data
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img={UrlService.MenuImages(u.img)}
              cardClicked={this.cardBagelClicked}
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

export default CardListBagels;
