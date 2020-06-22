import React from "react";
import "./clearButton.css";

const ClearButton = (props) => {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
