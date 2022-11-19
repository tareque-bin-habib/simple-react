import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData()
    return (
        <div className='simple-products'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Products;