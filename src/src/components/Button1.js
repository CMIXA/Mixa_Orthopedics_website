import React from "react";
import "../css/Buttons.css";

const Button1 = (props) => {
  return (
    <div>
      <a href={props.linkAdress}>
        <button className="button-1">{props.text}</button>
      </a>
    </div>
  );
};

export default Button1;
