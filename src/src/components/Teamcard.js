import React from "react";
import "../css/Teamcard.css";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Teamcard = (props) => {
  return (
    <div class="grid-item">
      <div className="RPcard-wrapper">
        <img src={props.img} />
        <div className="text">
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </div>
        <div className="social-links">
          <img src={instagram} />
          <img src={facebook} />
          <img src={linkedin} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
