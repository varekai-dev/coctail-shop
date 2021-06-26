import React, { useContext, useEffect } from "react";
import { Categories, CoctailsList } from "../components";
import Api from "../api";
import { CoctailsContext } from "../components/Context/CoctailsContext";

export default function Home() {
  const { setCoctails, setData, coctails } = useContext(CoctailsContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await Api.DB.getCoctails();
        const data = await response.data;
        setCoctails(data.drinks);
        setData(data.drinks);
      } catch (e) {
        console.log("error", e);
      }
    };
    getCategories();
  }, [setCoctails, setData]);
  // const onSortClick = (sortBy) => {
  //   if (sortBy === "All") {
  //     setCoctails(data);
  //     return;
  //   }
  //   const sortedCoctails = data.filter((item) => item.strAlcoholic === sortBy);
  //   setCoctails(sortedCoctails);
  // };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        {/* <SortPopup onSortClick={onSortClick} /> */}
      </div>
      <h2 className="content__title">All coctails</h2>
      <CoctailsList coctails={coctails} />
    </div>
  );
}
