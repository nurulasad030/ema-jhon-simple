import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3>
                    order summury in cart
                </h3>
                <p>selected item :{cart.length}</p>
        </div>
    );
};

export default Cart;