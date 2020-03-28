"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../actions/cartActions';
import {Col, Row, Badge} from 'react-bootstrap';
import CartItem from "./cartItem";

class Cart extends React.Component {
    renderCart() {
        return (
            <div className='cartList' header='Cart' bsStyle='primary'>
                {this.cartList()}
            </div>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
              return (
                  <CartItem key={cartItem.id}
                            cartItem={cartItem}
                            onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                            onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                            handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
              );
            })
        );
    }

    cartTotal() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
                    </Col>
                </Row>
            </div>
        );
    }
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    render() {

        return (
            <aside className='cart'>cart empty</aside>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);