import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  const { products,addToCart } = props;
  return (
    <div>
      <h1>This is shop page</h1>
      {products.map((pd) => (
        <Product key={pd.id} product={pd} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
