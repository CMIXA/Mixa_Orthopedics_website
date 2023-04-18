import React from "react";
import "../css/Pricing.css";
import Pricingcard from "../components/Pricingcard";

const Pricing = () => {
  return (
    <div className="Pricing-container">
      <div className="Pricing-wrapper">
        <div className="above-text">
          <h1>Pricing</h1>
          <h2>Get the best value per participant</h2>
          <p>Vitrual Reality / Augmented Reality / Mixed Reality</p>
        </div>
        <div className="Pricingcards-container">
          <Pricingcard
            title="Unmoderated Usability Test"
            price="$3"
            description="Give users tasks to complete while recording their experience on their own"
            linkAddress="/contactus"
          />
          <Pricingcard
            title="Moderated Usability Test"
            price="$6"
            description="Observe or moderate users while assigning them tasks to complete"
            linkAddress="/contactus"
          />
          <Pricingcard
            title="User Interview"
            price="$4"
            description="Interview users to gain insights into their needs, goals, behaviors, and attitudes"
            linkAddress="/contactus"
          />
        </div>
        <div className="talk-business">
          <h2>Want to talk business?</h2>
          <a href="/contactus">
            <button className="contactsales-b">Contact our sales team</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
