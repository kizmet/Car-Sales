import React from "react";

const AddedFeature = props => {
  const handleClick = item => {
    props.removeFeature(item);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => handleClick(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
