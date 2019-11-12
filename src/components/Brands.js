import React from "react";

const BrandItem = props => {
  return props.brandsItem.map((part, i) => (
    <li key={i}>
      <a href={part.link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={part.viewBox}
          width={part.width}
          height="32"
        >
          <path d={part.d}></path>
        </svg>
      </a>
    </li>
  ));
};

const Brand = ({ brandsItem }) => (
  <div className="ulbrand">
    <h2>
      We are a global company
      <br />
      with local culture
    </h2>
    <ul className="librand">
      <BrandItem brandsItem={brandsItem} />
    </ul>
  </div>
);

export default Brand;
