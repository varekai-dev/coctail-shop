import React, { useContext } from "react";
import CoctailBlock from "./CoctailBlock";
import LoadingBlock from "./CoctailBlock/LoadingBlock";
import { CoctailsContext } from "../components/Context/CoctailsContext";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CoctailsList({ coctails, loading }) {
  const location = useLocation();
  const { activeCategory } = useContext(CoctailsContext);
  const notify = (title, size) =>
    toast.success(`${title} size: ${size} ml added to cart `);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                    <CoctailBlock
                      notify={notify}
                      {...coctail}
                      key={coctail.idDrink}
                    />
                  ))
                : Array(12)
                    .fill(0)
                    .map((_, index) => <LoadingBlock key={index} />)}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CoctailsList;
