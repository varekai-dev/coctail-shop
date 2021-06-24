import React, { useContext } from "react";
import Button from "../Button";
import { HiOutlinePlusSm } from "react-icons/hi";
import classNames from "classnames";
import { CoctailsContext } from "../Context/CoctailsContext";

const availableSizes = [100, 200, 500];
const availableTypes = ["Alcoholic", "Non alcoholic"];

export default function CoctailBlock({ idDrink, strDrinkThumb, strDrink }) {
  const { setOrders, orders } = useContext(CoctailsContext);

  const [activeSize, setActiveSize] = React.useState(availableSizes[0]);
  const [activeType, setActiveType] = React.useState(availableTypes[0]);
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const handleOrder = () => {
    const newOrder = {
      id: idDrink,
      img: strDrinkThumb,
      title: strDrink,
      quantity: 1,
      size: activeSize,
      type: activeType,
    };

    if (orders.some((order) => order.id === newOrder.id)) {
      setOrders([
        ...orders,
        {
          ...newOrder,
          quantity: newOrder.quantity + 1,
        },
      ]);
    } else {
      setOrders([...orders, newOrder]);
    }
  };
  return (
    <div className="coctail-block">
      <img
        className="coctail-block__image"
        src={`${strDrinkThumb}/preview`}
        alt="Coctail"
      />
      <h4 className="coctail-block__title">{strDrink}</h4>
      <div className="coctail-block__selector">
        <ul>
          {availableTypes.map((type) => (
            <li
              key={type}
              onClick={() => onSelectType(type)}
              className={classNames({
                active: activeType === type,
              })}
            >
              {type}
            </li>
          ))}
        </ul>

        <ul>
          {availableSizes.map((size) => (
            <li
              key={size}
              onClick={() => onSelectSize(size)}
              className={classNames({
                active: activeSize === size,
              })}
            >
              {size} ml
            </li>
          ))}
        </ul>
      </div>
      <div className="coctail-block__bottom">
        <div className="coctail-block__price">
          from {strDrink.charCodeAt(0) + strDrink.charCodeAt(1)} uah
        </div>
        <Button className="button--add" outline onClick={handleOrder}>
          <HiOutlinePlusSm />
          <span>Add</span>
          <i>1</i>
        </Button>
      </div>
    </div>
  );
}
