import React from "react";
import CoctailBlock from "./CoctailBlock";
import LoadingBlock from "./CoctailBlock/LoadingBlock";

function CoctailsList({ coctails }) {
  return (
    <div className="content__items">
      {coctails
        ? coctails.map((coctail) => (
            <CoctailBlock {...coctail} key={coctail.idDrink} />
          ))
        : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)}
    </div>
  );
}

export default CoctailsList;
