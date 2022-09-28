import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleClick,product} = props;
   const {name,img,price,ratings,seller} = product;
  
  
    return (
        <div className='product'>
            <img src={img} alt="product image" />
           <div className='product-info'>
           <h6 className='product-name'> {name}</h6>
            <p className='price'>price : ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
           </div>
           <button className='btn-cart' onClick={() => handleClick(product)}>
            <p>
                Add to cart
            </p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;