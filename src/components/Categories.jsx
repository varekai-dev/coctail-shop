import React, { useState, useEffect, useContext } from "react";
import Api from "../api";
import useFetch from "../hooks/useFetch";
import { CoctailsContext } from "./Context/CoctailsContext";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [link, setLink] = useState("/random.php");
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
  const { data } = useFetch(link);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setLink(`/filter.php?c=${category}`);
  };
  useEffect(() => {
    setCoctails(data);
  }, [data, setCoctails]);

  console.log("data", data);
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
