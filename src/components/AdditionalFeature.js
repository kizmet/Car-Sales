import React from "react";

const AdditionalFeature = props => {
  const handleClick = item => {
    props.buyItem(item);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => handleClick(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
