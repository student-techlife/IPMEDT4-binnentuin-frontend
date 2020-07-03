import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";


class Floatbutton extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Container>
        <Link>
            <Button
                tooltip="Winkelmand"
                icon={faShoppingBasket}
                rotate={true}

               />
               </Link>
        </Container>
        </div>
    );
  }
}

export default Floatbutton;
