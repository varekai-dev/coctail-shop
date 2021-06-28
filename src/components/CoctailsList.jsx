import React, { useContext } from "react";
import CoctailBlock from "./CoctailBlock";
import LoadingBlock from "./CoctailBlock/LoadingBlock";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

function CoctailsList({ coctails, loading }) {
  const location = useLocation();
  const { activeCategory } = useContext(CoctailsContext);

  return (
    <div className="container">
      <div
        className={classNames("content__items", {
          "single-item":
            activeCategory === "Random" && location.pathname === "/",
        })}
      >
        {activeCategory === "Random" && (
          <h2 className="content__title">Personal recomendation</h2>
        )}
        {coctails === null ? (
          <p className="content__notFound">Nothing fould</p>
        ) : (
          <>
            {!loading && coctails
              ? coctails.map((coctail) => (
                  <CoctailBlock {...coctail} key={coctail.idDrink} />
                ))
              : Array(12)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)}
          </>
        )}
        {activeCategory === "Random" && (
          <h3 className="content__title">
            Для вибору коктейлю скористайтесь пошуком або фільтром
          </h3>
        )}
      </div>
    </div>
  );
}

export default CoctailsList;
