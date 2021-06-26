import React, { useEffect, useState } from "react";
import Api from "../api";
import CoctailBlock from "../components/CoctailBlock";

function Coctail({
  match: {
    params: { id },
  },
}) {
  const [coctail, setCoctail] = useState(null);
  const [ingridients, setIngridients] = useState(null);
  const [measures, setMeasures] = useState(null);
  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await Api.DB.getSingleCoctail(id);
        const data = await response.data;
        const filterData = await data.drinks.filter(
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
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchCoctail();
  }, [id]);

  useEffect(() => {}, [coctail]);

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
