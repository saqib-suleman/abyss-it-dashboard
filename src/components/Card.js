import { React } from "react";
import "./Card.css";

function Card(props) {
  return <div className="card">{props.name}</div>;
}

export default Card;
