import React from "react";

function OfficesCard(props) {
  return (
    <a href="#">
      <img src={props.image}></img>
      <div>
        <h4>{props.country}</h4>
        <button href="#">SEE OPENINGS</button>
      </div>
    </a>
  );
}
export default OfficesCard;
