import React, { useState, useEffect, useContext } from "react";
import Api from "../api";
import { CoctailsContext } from "./Context/CoctailsContext";

function Categories() {
  const [categories, setCategories] = useState([]);
  const { setCoctails, setData } = useContext(CoctailsContext);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await Api.DB.getCategoryList();
        const data = await response.data;
        setCategories(data.drinks);
      } catch (e) {
        console.log("error", e);
      }
    };
    getCategories();
  }, []);
  const [activeCategory, setActiveCategory] = useState(null);
  const onClickCategory = async (category) => {
    setActiveCategory(category);
    if (category !== "All") {
      try {
        const response = await Api.DB.searchByCategory(category);
        const data = await response.data;
        setData(data.drinks);
        setCoctails(data.drinks);
      } catch (e) {
        console.log("error", e);
      }
    }
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <li
              onClick={() => onClickCategory(category.strCategory)}
              className={
                activeCategory === category.strCategory ? "active" : ""
              }
              key={`${category.strCategory}_${index}`}
            >
              {category.strCategory}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
