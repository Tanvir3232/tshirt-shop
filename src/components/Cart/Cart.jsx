import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
            {
                cart.map(st=><p
                       key = {st._id}
                     >
                    {st.name} 
                    <button onClick={()=>handleRemoveFromCart(st._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;