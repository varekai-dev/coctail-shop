import React, { useContext } from "react";
import Button from "../Button";
import { CoctailsContext } from "../Context/CoctailsContext";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const CartItem = ({ id, img, size, title, type, price }) => {
  const { setOrders, orders } = useContext(CoctailsContext);

  const exist = orders.find((order) => order.id === id && order.type === type);

  const removeItem = () => {
    if (exist) {
    }
    const newOrders = orders.filter((order) => order !== exist);
    setOrders(newOrders);
  };

  const plusItem = () => {
    if (exist) {
      const newOrders = orders.map((order) =>
        order === exist
          ? {
              ...exist,

              size: exist.size + 100,
            }
          : order
      );
      setOrders(newOrders);
    }
  };
  const minusItem = () => {
    if (exist) {
      const newOrders = orders.map((order) =>
        order === exist
          ? {
              ...exist,
              size: exist.size - 100,
            }
          : order
      );
      setOrders(newOrders);
    }
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="coctail-block__image" src={img} alt="coctail" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>Type: {type}</p>
      </div>
      <div className="cart__item-count">
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={minusItem}
        >
          <BiMinus />
        </div>
        <b>{size} ml</b>
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={plusItem}
        >
          <BiPlus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{(price * size) / 100} uah </b>
      </div>
      <div className="cart__item-remove" onClick={removeItem}>
        <Button className="button--circle" outline>
          <IoMdClose />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
