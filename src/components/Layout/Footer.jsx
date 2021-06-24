import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoctailsContext } from "../Context/CoctailsContext";

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
function Footer() {
  const { setCoctails } = useContext(CoctailsContext);
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer__alphabet">
          {alphabet.map((letter) => (
            <li key={letter}>
              <Link to="/">{letter}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
