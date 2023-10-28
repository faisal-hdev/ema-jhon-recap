import './product.css'
import React from 'react';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    return (
        <div className='card'>
            <img src={product.img} alt="" />
            <div className='card-information'>
                <p className='card-title'>{product.name}</p>
                <p className='price'>Price: ${product.price}</p>
                <div className='last-information'>
                    <p><small>Manufacturer : {product.seller}</small></p>
                    <p><small>Rating : {product.ratings}</small></p>
                </div>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='card-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;