import React, { useState, useContext, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../Cart";
import AOS from "aos";
import { CoctailsContext } from "../Context/CoctailsContext";
import { Link } from "react-router-dom";
import classNames from "classnames";
import SearchBlock from "../SearchBlock";

function Header() {
  const { orders } = useContext(CoctailsContext);
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const totalVolume = orders.reduce((total, order) => total + order.size, 0);

  const OpenModal = () => {
    setOpen(true);
  };

  const closeModalWindow = (e) => {
    if (e.target.closest(".cart") && !e.target.closest(".cart__close")) {
      return;
    }
    setOpen(false);
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    AOS.init({
      duration: 2000,
    });
    return () => {
      AOS.refresh();
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={Logo} alt="Coctail logo" />
            <div>
              <h1>Coctails Bar</h1>
              <p>Best coctails in whole world</p>
            </div>
          </div>
        </Link>
        <SearchBlock />
        <div
          className={classNames("header__cart", {
            active: isScrolled === true,
          })}
        >
          <div className="button button--cart" onClick={OpenModal}>
            <span>{totalVolume} ml</span>
            <div className="button__delimiter"></div>
            <IoCartOutline />
            <span>{orders.length}</span>
          </div>
          {isOpen && (
            <Cart closeModalWindow={closeModalWindow} orders={orders} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
