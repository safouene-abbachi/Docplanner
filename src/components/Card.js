import React from "react";

function Card(props) {
  return (
    <div className="stat-part">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.parag}</p>
    </div>
  );
}

export default Card;
