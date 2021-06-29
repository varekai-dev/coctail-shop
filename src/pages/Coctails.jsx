import React, { useEffect, useContext } from "react";
import { CoctailsList } from "../components";
import useFetch from "../hooks/useFetch";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";

function Coctails() {
  const param = useParams();
  const { id } = param;

  const location = useLocation();
  const searchParams = location.search.split("=")[1];
  const url = searchParams
    ? `/search.php?s=${searchParams}`
    : `/search.php?f=${id}`;
  const { coctails, setCoctails, setActiveCategory } =
    useContext(CoctailsContext);
  const { data, loading } = useFetch(url);
  useEffect(() => {
    setActiveCategory(null);
    setCoctails(data);
  }, [data, setCoctails, setActiveCategory]);

  return <CoctailsList coctails={coctails} loading={loading} />;
}

export default Coctails;
