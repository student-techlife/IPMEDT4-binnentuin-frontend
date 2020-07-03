import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UrlService from "../../services/UrlService";
import { removeItem,addQuantity,subtractQuantity} from '../../components/actions/cartActions';

import Recipe from '../../components/Recipe';
// import Navbar from './Navbar';
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faArrowLeft, faPlus, faMinus, faTimes} from "@fortawesome/free-solid-svg-icons";

import './winkelmand.scss';

class WinkelmandRoof extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return (
                        <li className="shop-item avatar" key={item.id}>
                            <div className="shop-item__img">
                                <img src={UrlService.MenuImages(item.img)} alt={UrlService.MenuImages(item.img)} className=""/>
                            </div>

                            <div className="shop-item__desc">
                                <span className="shop-item__title">{item.naam}</span>
                                <p className="shop-item__desc">{item.beschrijving}</p>
                                <p className="shop-item__price">&euro; {item.prijs}</p>
                                <div className="shop-item__add-remove">
                                    <Link to="/winkelmand"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}><FontAwesomeIcon icon={faMinus}/></i></Link>
                                    <span>{item.quantity}</span>
                                    <Link to="/winkelmand"><i onClick={()=>{this.handleAddQuantity(item.id)}}><FontAwesomeIcon icon={faPlus}/></i></Link>
                                </div>
                                <button className="shop-item__remove" onClick={()=>{this.handleRemove(item.id)}}><FontAwesomeIcon icon={faTimes}/></button>
                            </div>
                        </li>
                    )
                })
            ):

            (
                <p className="shop-error">Uw winkelmandje is nog leeg</p>
            )
        return(
            <section className="winkelmand">
                <Header />

                <main className="container">
                    <nav className="go-back">
                        <Link to="/theroof/menu">
                            <FontAwesomeIcon className="go-back__icon" icon={faArrowLeft}/>
                        </Link>
                    </nav>
                    <article className="cart">
                        <h1 className="cart__title"><FontAwesomeIcon className="cart__icon" icon={faShoppingBasket}/> U heeft het volgende in uw winkelwagen liggen:</h1>

                        <ul className="shop">
                            {addedItems}
                        </ul>
                    </article>
                    <Recipe />
                </main>
                    <Footer />
            </section>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WinkelmandRoof)
