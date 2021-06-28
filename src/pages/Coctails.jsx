import React, { useEffect, useContext } from "react";
import { CoctailsList } from "../components";
import useFetch from "../hooks/useFetch";
import { CoctailsContext } from "../components/Context/CoctailsContext";

function Coctails({
  match: {
    params: { id },
  },
}) {
  const { coctails, setCoctails } = useContext(CoctailsContext);
  const { data, loading } = useFetch(`/search.php?f=${id}`);
  useEffect(() => {
    setCoctails(data);
  }, [data, setCoctails]);
  return <CoctailsList coctails={coctails} loading={loading} />;
}

export default Coctails;
