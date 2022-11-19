import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='simple-products'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Products;