import React, { useContext, useEffect } from "react";
import { Categories, CoctailsList } from "../components";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { setCoctails, coctails } = useContext(CoctailsContext);
  const { data, loading } = useFetch("/random.php");
  useEffect(() => {
    setCoctails(data);
  }, [data, setCoctails]);

  return (
    <>
      <div className="content__top">
        <Categories />
      </div>

      <CoctailsList coctails={coctails} loading={loading} />
    </>
  );
}
