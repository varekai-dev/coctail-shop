import React from "react";
import CoctailBlock from "./CoctailBlock";
import LoadingBlock from "./CoctailBlock/LoadingBlock";

function CoctailsList({ coctails }) {
  return (
    <div className="container">
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

export default CoctailsList;
