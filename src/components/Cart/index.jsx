import React, { useContext } from "react";
import reactDOM from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import EmptyCart from "../../assets/img/empty-basket.png";
import CartItem from "./CartItem";
import Progress from "react-progressbar";
import { CoctailsContext } from "../Context/CoctailsContext";

const Modal = ({ isOpen, closeModalWindow }) => {
  const { orders } = useContext(CoctailsContext);
  if (!isOpen) return null;
  const maxDrunk = 2000;
  const totalVolume = orders.reduce((total, order) => total + order.size, 0);
  const completed = (totalVolume * 100) / maxDrunk;

  if (completed >= 100) {
    alert("🐾Воу тигре полегше🐾");
  }
  return reactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        <h1>Cart</h1>
        {orders.length > 0 ? (
          orders.map((order) => <CartItem {...order} key={Math.random()} />)
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
};
export default Modal;
