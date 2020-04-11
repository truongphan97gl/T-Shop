import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-buttom.component";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.components";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Check Out</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropDown);
