import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])
    const btnAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const handleRemoveItem = products => {
        const remaining = cart.filter(product => product.id !== products.id)
        setCart(remaining)
    }
    return (
        <div className='simple-products'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} btnAddToCart={btnAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Products;