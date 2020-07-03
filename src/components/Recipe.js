import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {
    
    // componentWillUnmount() {
    //     if(this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <section>
                <article className="total-price">
                    <p className="total-price__item">Totaal:</p>
                    <p className="total-price__item">&euro; {this.props.total}</p>
                    <input 
                            type="text" 
                            name="totaalPrijs"
                            value={this.props.total}
                            onChange={this.onChange}
                    />
                </article>
                <article className="checkout">
                    <button className="checkout__button">Afrekenen</button>
                </article>
            </section>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
