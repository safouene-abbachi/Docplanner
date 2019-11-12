import React from "react";

const Item = props => {
  return props.targetItems.map((el, i) => (
    <div key={i} className={el.class}>
      <h3>{el.target}</h3>
      <p>{el.text}</p>
      {
        <div className="select-menu">
          {el.menu && (
            <select>
              <option value="0">CHOOSE COUNTRY</option>
              <option value="1">Argentina</option>
              <option value="2">Australia</option>
              <option value="3">Brazil</option>
              <option value="4">Chile</option>
              <option value="5">Colombia</option>
              <option value="6">Czech</option>
              <option value="7">France</option>
              <option value="8">Italy</option>
              <option value="9">Mexico</option>
              <option value="10">Peru</option>
              <option value="11">Poland</option>
              <option value="12">Portugal</option>
              <option value="13">Spain</option>
              <option value="14">Turkey</option>
              <option value="15">UK</option>
            </select>
          )}
        </div>
      }
      <img src={el.image} />
    </div>
  ));
};

const Target = ({ targetItems }) => (
  <div className="target-items">
    <Item targetItems={targetItems} />
  </div>
);
export default Target;
