import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture,price,_id,name} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h5>{name}</h5>
            <h6>Price: {price}</h6>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;