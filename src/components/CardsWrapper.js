import { React } from "react";
import Card from "./Card";
import "./CardsWrapper.css";

function CardsWrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default CardsWrapper;
