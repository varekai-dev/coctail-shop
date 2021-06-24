import React, { useContext, useEffect } from "react";
import {
  Categories,
  SortPopup,
  CoctailBlock,
  LoadingBlock,
} from "../components";
import Api from "../api";
import { CoctailsContext } from "../components/Context/CoctailsContext";

export default function Home() {
  const { setCoctails, setData, data, coctails } = useContext(CoctailsContext);
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
  const onSortClick = (sortBy) => {
    if (sortBy === "All") {
      setCoctails(data);
      return;
    }
    const sortedCoctails = data.filter((item) => item.strAlcoholic === sortBy);
    setCoctails(sortedCoctails);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup onSortClick={onSortClick} />
      </div>
      <h2 className="content__title">All coctails</h2>
      <div className="content__items">
        {coctails.length > 0
          ? coctails.map((coctail) => (
              <CoctailBlock {...coctail} key={coctail.idDrink} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}
