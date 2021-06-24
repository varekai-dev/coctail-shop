import React, { useState, useContext } from "react";
import Logo from "../../assets/img/logo.png";
import { IoCartOutline } from "react-icons/io5";
import Modal from "../Cart";
import { CoctailsContext } from "../Context/CoctailsContext";

function Header() {
  const { orders } = useContext(CoctailsContext);
  const [isOpen, setOpen] = useState(false);
  const totalVolume = orders.reduce((total, order) => total + order.size, 0);
  console.log(totalVolume);
  const maxDrunk = 2000;
  const OpenModal = () => {
    setOpen(true);
  };

  const closeModalWindow = () => {
    setOpen(false);
  };

  const completed = (totalVolume * 100) / maxDrunk;

  if (completed >= 100) {
    alert("🐾Воу тигре полегше🐾");
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="50" src={Logo} alt="Coctail logo" />
          <div>
            <h1>Coctails Bar</h1>
            <p>Best coctails in whole world</p>
          </div>
        </div>
        <div className="header__cart">
          <div className="button button--cart" onClick={OpenModal}>
            <span>{totalVolume} ml</span>
            <div className="button__delimiter"></div>
            <IoCartOutline />
            <span>{orders.length}</span>
          </div>

          <Modal
            closeModalWindow={closeModalWindow}
            isOpen={isOpen}
            orders={orders}
            completed={completed}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
