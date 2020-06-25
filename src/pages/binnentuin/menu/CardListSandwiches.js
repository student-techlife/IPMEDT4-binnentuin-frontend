import React from "react";
import Card from "./Card";

import axios from "axios";
import UrlService from "../../../services/UrlService";

class CardListSandwiches extends React.Component {

  cardSandwichClicked = (id) => {
    this.props.cardSandwichClicked(id);
  }

  constructor(props) {
    super(props);
    this.state = {
        Elements: []
    };
  }

  getProductsData() {
    axios.get(UrlService.BinnentuinMenu("sandwitches"), {}).then(res => {
      const data = res.data
      console.log(data)
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img="https://www.thuisbezorgd.nl/blog/wp-content/uploads/2019/04/bibimbap-eten-vanavond.png"
              cardClicked={this.cardSandwichClicked}
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

export default CardListSandwiches;
