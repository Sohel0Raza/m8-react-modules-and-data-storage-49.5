import React from 'react';
import { addTodb, removeTodb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    const addToCart = (id) =>{
      addTodb(id)
    }
    const removeFromCart = (id) =>{
       removeTodb(id)
    }
    const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Price: $ {price}</p>
            <p><small>Id: {id}</small></p>
            <button className='btn-cart' onClick={addToCartWithParam}>Add to Cart</button>
            {/* <button className='btn-cart' onClick={() => addToCart(id)}>Add to Cart Short</button> */}
            <button className='btn-cart-remove' onClick={() => removeFromCart(id)}>Remove to Cart</button>
        </div>
    );
};

export default Cosmetic;