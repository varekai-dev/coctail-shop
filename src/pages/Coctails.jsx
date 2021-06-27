import React, { useEffect, useState } from "react";
import { CoctailsList } from "../components";
import useFetch from "../hooks/useFetch";

function Coctails({
  match: {
    params: { id },
  },
}) {
  const [coctails, setCoctails] = useState([]);
  const { data, loading } = useFetch(`/search.php?f=${id}`);
  useEffect(() => {
    setCoctails(data);
  }, [data, setCoctails]);
  return <CoctailsList coctails={coctails} loading={loading} />;
}

export default Coctails;
