import React, { useEffect, useContext, useState } from "react";
import { CoctailsList } from "../components";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import Api from "../api";
import { useLocation } from "react-router";

function Search() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = location.search.split("=")[1];
  const { coctails, setCoctails, setActiveCategory } =
    useContext(CoctailsContext);

  useEffect(() => {
    if (searchParams) {
      setActiveCategory(null);
      const fetchSearch = async () => {
        try {
          setLoading(true);
          const data = await Api.DB.getSingleCoctail(searchParams);
          setCoctails(data.data.drinks);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
      fetchSearch();
    }
  }, [searchParams, setCoctails, setActiveCategory]);
  return searchParams ? (
    <CoctailsList coctails={coctails} loading={loading} />
  ) : (
    <div className="content__notFound">
      Для вибору коктейлю скористайтесь пошуком або фільтром
    </div>
  );
}

export default Search;
