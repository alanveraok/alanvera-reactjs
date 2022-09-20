import React, { useState } from "react";
import "./CartItem.css";

import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";

import { cartContext } from "../../store/cartContext";

import { Link } from "react-router-dom";

function CartItem({ data }) {
  const { addToCart, removeItem, clearCart } = useContext(cartContext);
  const [countItem, setCountItem] = useState(0);

  function handleAdd(counter) {
    addToCart(data, counter);
    setCountItem(counter);
  }

  function removeItemCart(data) {
    removeItem(data);
  }

  function clearItemCart() {
    clearCart();
  }

  return (
    <div className="in-cart">
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt="imagen" />
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <h3>$ {data.price}</h3>
        <p>STOCK: {data.stock}</p>
        <p>CANTIDAD: {data.counter}</p>

        <button className="btn-primary" onClick={removeItemCart}>
          ELIMINAR CARRITO
        </button>
        <button className="btn-primary" onClick={clearItemCart}>
          ELIMINTAR TODO
        </button>
      </div>
    </div>
    </div>
  );
}

export default CartItem;
