import { Link } from "react-router-dom";

import capitalCase from "../utils/capitalCase";
import "./MenuCard.css";

function MenuCard({ name }) {
  return (
    <Link className="menuCard" to={`/${name}`}>
      {capitalCase(name)}
    </Link>
  );
}

export default MenuCard;
