import React, { useState, useEffect, useContext } from "react";
import Api from "../api";
import useFetch from "../hooks/useFetch";
import { CoctailsContext } from "./Context/CoctailsContext";

function Categories() {
  const [categories, setCategories] = useState([]);
  const { setCoctails, activeCategory, setActiveCategory } =
    useContext(CoctailsContext);
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

  const { data: categoryData } = useFetch(`/filter.php?c=${activeCategory}`);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setCoctails(categoryData);
  };

  const { data } = useFetch("/random.php");
  const fetchRandomCoctail = () => {
    setCoctails(data);
    setActiveCategory("Random");
  };
  return (
    <div className="container">
      <div className="categories">
        <ul>
          <li
            className={activeCategory === "Random" ? "active" : ""}
            onClick={fetchRandomCoctail}
          >
            Random
          </li>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <li
                onClick={() => handleCategory(category.strCategory)}
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
    </div>
  );
}

export default Categories;
