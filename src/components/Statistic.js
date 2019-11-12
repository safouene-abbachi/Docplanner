import React from "react";
import logo from "../logo.png";
import Card from "./Card";

const Statistics = ({ statisticItems }) => (
  <div className="hole-stat">
    <div className="logo-part">
      <h1>
        The world's biggest healthcare <br />
        platform
      </h1>
      <p>
        We work from 6 offices all over the world, bringing Docplanner Group to
        life in almost 20 countries.
      </p>
      <img src={logo}></img>
    </div>
    <div className="stat-box">
      {statisticItems.map((el, i) => (
        <Card key={i} image={el.image} title={el.title} parag={el.parag} />
      ))}
    </div>
  </div>
);

export default Statistics;

//  {/* <Statistic statisticItems={statisticItems} /> */}
//  {const Statistic = props => {
//   return props.statisticItems.map((el, i) => (

//   ));
// };}
