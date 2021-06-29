import React, { useContext } from "react";
import reactDOM from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import EmptyCart from "../../assets/img/empty-basket.png";
import CartItem from "./CartItem";
import Progress from "react-progressbar";
import { CoctailsContext } from "../Context/CoctailsContext";
import Button from "../Button";

const Cart = ({ closeModalWindow }) => {
  const { orders, setOrders } = useContext(CoctailsContext);
  const maxDrunk = 2000;
  const alcoDrinks = orders.filter((order) => order.type === "Alcoholic");
  const totalVolume = alcoDrinks.reduce(
    (total, order) => total + order.size,
    0
  );
  const totalPriсe = orders.reduce(
    (total, order) => total + order.price * (order.size / 100),
    0
  );
  const completed = (totalVolume * 100) / maxDrunk;
  const onClearCart = () => {
    setOrders([]);
  };

  const onClickOrder = () => {
    console.log(orders);
    onClearCart();
  };

  return reactDOM.createPortal(
    <div className="overlay" onClick={closeModalWindow}>
      <div className="cart">
        <div className="cart__top">
          <h1>Cart</h1>
          <button className="cart__close" onClick={closeModalWindow}>
            <RiCloseLine />
          </button>
        </div>
        <div className="cart__content">
          {orders.length > 0 ? (
            <>
              <div className="cart__content-top">
                <div className="cart__clear">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 5H4.16667H17.5"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33337 9.16667V14.1667"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6666 9.16667V14.1667"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span onClick={onClearCart}>Clear cart</span>
                </div>
                <div className="cart__orders">
                  {orders.map((order) => (
                    <CartItem {...order} key={Math.random()} />
                  ))}
                </div>
              </div>
              <div className="cart__content-bottom">
                <div className="cart__total">
                  <div className="cart__total-volume">
                    <div>Total volume:</div>
                    <div>{totalVolume} ml</div>
                  </div>
                  <div className="cart__total-price">
                    <div>Total price:</div>
                    <div>{totalPriсe} uah</div>
                  </div>
                </div>
                <div className="cart__alcometer">
                  {completed < 100 ? (
                    <>
                      <Progress completed={completed} />
                      <p> Left {maxDrunk - totalVolume} ml to get drunk</p>
                    </>
                  ) : (
                    <p>Congratulations! The drunk status will be achieved 😋</p>
                  )}
                </div>
                <Button onClick={onClickOrder} className="pay-btn">
                  <span>Pay</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="cart__empty">
              <img src={EmptyCart} alt="empty" />
              <p>Please, order something</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("cart")
  );
};
export default Cart;
