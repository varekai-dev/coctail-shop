import React, { useEffect, useState } from "react";
import Api from "../api";
import { CoctailsList } from "../components";

function Coctails({
  match: {
    params: { id },
  },
}) {
  const [coctails, setCoctails] = useState([]);
  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await Api.DB.getCoctailsByLetter(id);
        const data = await response.data;
        setCoctails(data.drinks);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchCoctail();
  }, [id]);

  return <CoctailsList coctails={coctails} />;
}

export default Coctails;
