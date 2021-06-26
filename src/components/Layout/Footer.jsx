import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      <div className="container">
        <ul className="footer__alphabet">
          {alphabet.map((letter) => (
            <li key={letter}>
              <Link
                to={`/coctails/${letter}`}
                className={classNames({
                  active: pathname === `/coctails/${letter}`,
                })}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
