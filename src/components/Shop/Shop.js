import './Shop.css'
import Product from '../Product/Product';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        product={product}
                        key ={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                {/* <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p> */}
                <Cart
                    cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;