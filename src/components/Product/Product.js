import React from 'react';

const Product = ({product}) => {
    const {name} = product;
    return (
        <div style={{border: "1px solid red", margin: "10px", padding: "5px"}}>
            <h3>{name}</h3>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;