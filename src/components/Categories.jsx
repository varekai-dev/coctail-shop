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
  const [activeCategory, setActiveCategory] = useState("All");
  const onClickCategory = async (category) => {
    setActiveCategory(category);

    try {
      const response = await Api.DB.searchByCategory(category);
      const data = await response.data;
      setCoctails(data.drinks);
    } catch (e) {
      console.log("error", e);
    }
  };
  const resetCategories = () => {
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
    setActiveCategory("All");
    getCategories();
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === "All" ? "active" : ""}
          onClick={resetCategories}
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
