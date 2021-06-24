import React, { createContext, useState } from "react";

export const CoctailsContext = createContext();

function CoctailProvider({ children }) {
  const [coctails, setCoctails] = useState([]);
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);

  const store = {
    coctails,
    setCoctails,
    data,
    setData,
    orders,
    setOrders,
  };
  return (
    <CoctailsContext.Provider value={store}>
      {children}
    </CoctailsContext.Provider>
  );
}

export default CoctailProvider;
