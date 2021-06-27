import { useState, useEffect } from "react";
import axios from "axios";

const URI = "https://www.thecocktaildb.com/api/json/v1/1";

const useFetch = (url) => {
  const [state, setState] = useState({
    loding: false,
    data: undefined,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const response = await axios(`${URI}${url}`);
        setState(() => ({ data: response.data.drinks, loading: false }));
      } catch (e) {
        console.log("Error:", e);
        setState((prev) => ({ ...prev, loading: false }));
      }
    }

    fetchData();
  }, [url]);
  return { ...state };
};

export default useFetch;
