import { useState, useEffect } from "react";
import axios from "axios";

const URI = "https://www.thecocktaildb.com/api/json/v1/1";

const useFetchData = (url) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`${URI}${url}`);
        setState(response.data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    fetchData();
  }, [url]);
  return state;
};

export default useFetchData;
