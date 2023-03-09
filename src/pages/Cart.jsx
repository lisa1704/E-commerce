import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart }) =>{
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}

    <Link to="/">Continue Shopping</Link>
    </div>
}

export default Cart;