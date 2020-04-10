import React from "react";

import CustomButton from "../custom-button/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To Check Out</CustomButton>
      </div>
    </div>
  );
};
export default Cart;
