import React from "react";
import OfficesCard from "./Officescard";

const Office = ({ OfficesItem }) => (
  <div className="city">
    <div className="city-header">
      <h4>Improve the lives of millions. Change yours forever</h4>
      <p>
        More than 1000 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,
        our search for great talent never stops.
      </p>
    </div>
    <div className="spots">
      {OfficesItem.map((el, i) => (
        <OfficesCard key={i} image={el.image} country={el.country} />
      ))}
    </div>
  </div>
);

export default Office;
