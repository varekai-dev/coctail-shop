import { useState, useEffect } from "react";
import axios from "axios";

const URI = "https://www.thecocktaildb.com/api/json/v1/1";

const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(`${URI}${url}`);
        setData(response.data.drinks);

        setLoading(false);
      } catch (e) {
        console.log("Error:", e);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);
  return { data, loading };
};

export default useFetch;
