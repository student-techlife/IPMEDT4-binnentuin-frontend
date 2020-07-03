import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UrlService from "../../services/UrlService";
import axios from "axios";
import { removeItem,addQuantity,subtractQuantity} from '../../components/actions/cartActions';

import Recipe from '../../components/Recipe';
// import Navbar from './Navbar';
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import history from "../../history";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faArrowLeft, faPlus, faMinus, faTimes} from "@fortawesome/free-solid-svg-icons";

import './winkelmand.scss';

class Winkelmand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            redirect: null,    
            naam: '',
            productId: '',
            productQt: '',
            totaalPrijs: '',

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.naam = React.createRef();
        this.productId = React.createRef();
        this.productQt = React.createRef();
        this.totaalPrijs = React.createRef();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { naam, productId, productQt, totaalPrijs } = this.state;
        
        console.log(`Naam: ${this.naam.current.value}`);
        console.log(`Product ID: ${this.productId.value}`);
        console.log(`Product QT: ${this.productQt.current.value}`);
        console.log(`Totaal prijs: ${this.totaalPrijs.current.value}`);
        // let test = {this.naam.current.value;

        
        // const formData = new FormData();
        // console.log(formData);
        // formData.append("naam", this.naam.current.value);
        // formData.append("productId", this.productId.current.value);
        // formData.append("productQt", this.productQt.current.value);
        // formData.append("totaalPrijs", this.totaalPrijs.current.value);


        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        const data = new FormData(e.target);
        


        // axios.post( 'https://postman-echo.com/post/', data, {
        // axios.post( 'https://postman-echo.com/post/', { naam, productId, productQt, totaalPrijs })
        axios.post(UrlService.Checkout(), data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRF-TOKEN':'csrf_field()'
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    const result = res.data;
                    console.log('RESULT:');
                    console.log(result);
                    console.log(result.form);
                }
            })
            .catch(error => {
                if (error.request) {
                    const data = JSON.parse(error.request.response);
                    console.log(data);
                    
                }
            })
    }

    goback = () => {
        history.goBack();
    }

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

    // form submit


    render() {
        let { naam, productId, productQt, totaalPrijs } = this.state;
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return (
                        <li className="shop-item avatar" key={item.id}>
                            <input readOnly
                                id="productId"
                                type="text" 
                                name="productId"
                                value={item.id}
                                // onChange={this.onChange}
                                ref={this.productId}
                            />
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
                                    <input readOnly
                                        id="productQt"
                                        type="text" 
                                        name="productQt"
                                        value={item.quantity}
                                        // onChange={this.onChange}
                                        ref={this.productQt}
                                    />
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
                        {/* <Link to="/binnentuin/menu">
                            <FontAwesomeIcon className="go-back__icon" icon={faArrowLeft}/>
                        </Link> */}
                        <FontAwesomeIcon className="go-back__icon" icon={faArrowLeft} onClick={this.goback}/>
                    </nav>
                    <form onSubmit={this.onSubmit}>
                        <article className="cart">
                            <h1 className="cart__title"><FontAwesomeIcon className="cart__icon" icon={faShoppingBasket}/> U heeft het volgende in uw winkelwagen liggen:</h1>
                            
                            <ul className="shop">
                                {addedItems}
                            </ul>
                        </article>
                        <article className="total-price">
                            <p className="total-price__item">Totaal:</p>
                            <p className="total-price__item">&euro; {this.props.total}</p>
                            <input readOnly
                                type="text" 
                                name="totaalPrijs"
                                value={this.props.total}
                                // onChange={this.onChange}
                                ref={this.totaalPrijs}
                            />
                        </article>
                        <article className="checkout">
                            <button className="checkout__button">Afrekenen</button>
                        </article>
                        <input 
                            type="text" 
                            name="naam"
                            // value={naam}
                            // onChange={this.onChange}
                            ref={this.naam}
                        />
                    </form>
                </main>

                <Footer />
            </section>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Winkelmand)
