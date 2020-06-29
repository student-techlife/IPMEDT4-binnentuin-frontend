import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../components/actions/cartActions';

import Recipe from '../../components/Recipe';
// import Navbar from './Navbar';
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

class Winkelmand extends Component {

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
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.naam}</span>
                                <p>{item.desc}</p>
                                <p><b>Prijs: {item.prijs}$</b></p>
                                <p>
                                    <b>Aantal: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/winkelmand"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                    <Link to="/winkelmand"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div>
                        </li>
                    )
                })
            ):

            (
                <p>Niets.</p>
            )
        return(
            <div className="container">
            <Header />
                <div className="cart">
                    <h5>Je hebt besteld:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe />
                <Footer />
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Winkelmand)