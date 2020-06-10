import React from 'react';
import Bg_image from '../../assets/img/background-binnentuin.jpg';
import '../../assets/css/background.css';

class Background extends React.Component {
    render() {
        return (
            <img src={Bg_image} alt="Achtergrond plaatje" className="login__background"/>
        )
    }
}

export default Background;