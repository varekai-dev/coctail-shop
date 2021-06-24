import React, { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
const items = ["All", "Alcoholic", "Non alcoholic"];

function SortPopup({ onSortClick }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    onSortClick(items[index]);
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <div className={visiblePopup ? "rotate" : ""}>
          {" "}
          <FiChevronDown />
        </div>

        <b>Sort by:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  onClick={() => onSelectItem(index)}
                  className={activeItem === index ? "active" : ""}
                  key={`${name}_${index}`}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
