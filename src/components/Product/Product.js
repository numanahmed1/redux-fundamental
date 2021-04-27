import React from "react";

const Product = ({ product, addToCart }) => {
  const { id, name } = product;
  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "5px" }}>
      <h3>{name}</h3>
      <button onClick={() => addToCart(id, name)}>Add to cart</button>
    </div>
  );
};

export default Product;
