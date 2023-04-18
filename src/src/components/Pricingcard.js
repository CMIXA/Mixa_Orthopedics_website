import React from "react";
import "../css/Pricingcard.css";

const Pricingcard = (props) => {
  return (
    <div className="PC-container">
      <div className="PC-wrapper">
        <div className="PC-title">
          <h2>{props.title}</h2>
        </div>
        <div className="PC-price">
          <h1>{props.price}</h1>
          <p>/Min</p>
        </div>
        <div className="PC-description">
          <p>{props.description}</p>
        </div>
        <div className="PC-button-container">
          {/* <Button1/> */}
          <a className="PC-button" href={props.linkAddress}>
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricingcard;
