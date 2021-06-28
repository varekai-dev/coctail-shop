import React, { useContext, useEffect } from "react";
import { Categories, CoctailsList } from "../components";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router";
import Api from "../api";

export default function Home() {
  const location = useLocation();
  const searchParams = location.search.split("=")[1];
  const { setCoctails, coctails, setActiveCategory } =
    useContext(CoctailsContext);
  const { data, loading } = useFetch("/random.php");
  useEffect(() => {
    if (searchParams) {
      return;
    }
    setCoctails(data);
  }, [data, setCoctails, searchParams]);

  useEffect(() => {
    if (searchParams) {
      setActiveCategory(null);
      const fetchSearch = async () => {
        try {
          const data = await Api.DB.getSingleCoctail(searchParams);
          setCoctails(data.data.drinks);
        } catch (e) {
          console.log(e);
        }
      };
      fetchSearch();
    }
  }, [searchParams, setCoctails, setActiveCategory]);
  return (
    <>
      <div className="content__top">
        <Categories />
      </div>

      <CoctailsList coctails={coctails} loading={loading} />
    </>
  );
}
