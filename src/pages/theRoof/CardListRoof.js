import React from "react";
import Card from "./CardRoof";

import axios from "axios";
import UrlService from "../../services/UrlService";

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
    axios.get(UrlService.BinnentuinMenu("theRoof"), {}).then(res => {
      const data = res.data
      console.log(data)
      const producten = data.map(u =>
        <Card title={u.naam}
              desc={u.beschrijving}
              content={"€" + u.prijs}
              buttonText="+"
              id={u.id}
              img={UrlService.MenuImages(u.img)}
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
