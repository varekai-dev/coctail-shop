import React, { createContext, useState } from "react";

export const CoctailsContext = createContext();

function CoctailProvider({ children }) {
  const [coctails, setCoctails] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Random");
  const [newOrder, setNewOrder] = useState(null);
  const store = {
    coctails,
    setCoctails,
    orders,
    setOrders,
    activeCategory,
    newOrder,
    setNewOrder,
    setActiveCategory,
  };
  return (
    <CoctailsContext.Provider value={store}>
      {children}
    </CoctailsContext.Provider>
  );
}

export default CoctailProvider;
