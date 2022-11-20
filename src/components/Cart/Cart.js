import React, { useState } from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {
    console.log(cart)
    const { price } = cart

    let sum = 0;
    let grandTotal = 0
    let shippingCharge = 20
    for (const product of cart) {
        sum = sum + product.price
        grandTotal = sum + shippingCharge;
    }


    return (
        <div className='cart-container'>
            <div className='cart'>
                <p className='text-white'>Selected Product: {cart.length} </p>
                <h5 className='text-white'>Total : {sum}$</h5>
                <h5 className='text-white'>Shipping  : 20$</h5>
                <h5 className='text-white'>Grand Total: {grandTotal}$</h5>
            </div>
            <div className='names'>
                {
                    cart.map(productName => <p>{productName.name}
                        <button onClick={() => handleRemoveItem(productName)}>X</button>
                    </p>

                    )
                }
            </div>
        </div>
    );
};

export default Cart;