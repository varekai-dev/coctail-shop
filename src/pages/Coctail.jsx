import React, { useEffect, useState } from "react";
import Api from "../api";
import CoctailBlock from "../components/CoctailBlock";

function Coctail({
  match: {
    params: { id },
  },
}) {
  const [coctail, setCoctail] = useState(null);
  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await Api.DB.getSingleCoctail(id);
        const data = await response.data;
        const filterData = await data.drinks.filter(
          (item) => item.strDrink.toLowerCase() === id
        );
        setCoctail(filterData[0]);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchCoctail();
  }, [id]);

  return (
    <div className="container">{coctail && <CoctailBlock {...coctail} />}</div>
  );
}

export default Coctail;
