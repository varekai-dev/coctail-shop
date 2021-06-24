import React from "react";
import reactDOM from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import EmptyCart from "../../assets/img/empty-basket.png";
import CartItem from "./CartItem";
import Progress from "react-progressbar";

const Modal = ({ isOpen, closeModalWindow, orders, completed }) =>
  isOpen &&
  reactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        <h1>Cart</h1>
        {orders.length > 0 ? (
          orders.map((order) => <CartItem {...order} key={order.id} />)
        ) : (
          <div className="modal__empty">
            <img src={EmptyCart} alt="empty" />
            <p>Please, order something</p>
          </div>
        )}
        {orders.length > 0 && <Progress completed={completed} />}
        <button className="modal__close" onClick={closeModalWindow}>
          <RiCloseLine />
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );

export default Modal;
