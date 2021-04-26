import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const products = [
  {
    id: 1,
    name: "Lenovo laptop",
  },
  {
    id: 2,
    name: "Asus laptop",
  },
  {
    id: 3,
    name: "HP laptop",
  },
  {
    id: 4,
    name: "Apple laptop",
  },
  {
    id: 5,
    name: "Dell laptop",
  },
];
const Shop = () => {
  return (
    <div>
      <h1>This is shop page</h1>
      {products.map((pd) => (
        <Product product={pd} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
