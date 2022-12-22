import { React } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ text, link, isInternal }) {
  if (isInternal) {
    return (
      <Link to={link} className="card">
        {text}
      </Link>
    );
  } else {
    return (
      <a href={link} className="card">
        {text}
      </a>
    );
  }
}

export default Card;
