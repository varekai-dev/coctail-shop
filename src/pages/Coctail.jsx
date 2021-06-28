import React, { useEffect, useState } from "react";
import CoctailBlock from "../components/CoctailBlock";
import useFetch from "../hooks/useFetch";
function Coctail({
  match: {
    params: { id },
  },
}) {
  const [coctail, setCoctail] = useState(null);
  const [ingridients, setIngridients] = useState(null);
  const [measures, setMeasures] = useState(null);
  const { data } = useFetch(`/search.php?s=${id}`);
  useEffect(() => {
    if (data) {
      const filterData = data.filter(
        (item) => item.strDrink.toLowerCase() === id
      );
      setCoctail(filterData[0]);
      const drinkEntries = Object.entries(filterData[0]);
      const [ingredientsArray, measuresArray] = [
        "strIngredient",
        "strMeasure",
      ].map((keyName) =>
        drinkEntries
          .filter(
            ([key, value]) => key.startsWith(keyName) && value && value.trim()
          )
          .map(([key, value]) => value)
      );
      setIngridients(ingredientsArray);
      setMeasures(measuresArray);
    }
  }, [data, setCoctail, id]);

  return (
    <div className="coctail">
      <div className="container">
        <div className="coctail__inner">
          {coctail && (
            <>
              <CoctailBlock {...coctail} />
              <div className="coctail__content">
                <h1>{coctail.strDrink}</h1>
                <p>{coctail.strInstructions}</p>
                <h2>Ingridients:</h2>
                <div className="coctail__recipe">
                  <div className="coctail__ingridients">
                    {ingridients &&
                      ingridients.map((ingridient, index) => (
                        <div key={`${ingridient}_${index}`}>{ingridient}</div>
                      ))}
                  </div>
                  <div className="coctail__ingridients">
                    {measures &&
                      measures.map((measure, index) => (
                        <div key={`${measure}_${index}`}>{measure}</div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coctail;
