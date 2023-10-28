import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    let shipping = 0;
    for (const product of props.cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    };
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping;
    return (
        <div className='cart'>
            <h2>Order Summary </h2>
            <p>Selected Items : {props.cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <p className='total-price'>Grand Total : ${grandTotal}</p>
        </div>
    );
};

export default Cart;