import React from "react";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Separator from "../components/Separator";

const MUT = () => {
  return (
    <div className="MUT-container">
      <div className="MUT-section-1">
        <div className="MUT-s1-wrapper">
          <h1>Moderated Usability Testing</h1>
          <p>
            Conduct moderated usability tests by observing or moderating users
            while assigning them tasks to complete on your product or prototype.
          </p>
          <div className="button-container">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </div>
      <Separator />
      <div className="MUT-section-2">
        <div className="MUT-s2-wrapper">
          <div className="div-L">
            <h1>Moderate the user via video</h1>
            <p>
              Moderate and observe your participant’s experience with your
              product while you watch them from a 1st-person view . This allows
              you to watch each of your participants moves from their
              perspective.
            </p>
          </div>
          <div className="div-R">
            <img />
          </div>
        </div>
      </div>
      <Separator />
      <div className="MUT-section-3">
        <div className="MUT-s3-wrapper">
          <div className="div-L">
            <img />
          </div>
          <div className="div-R">
            <h1>Moderate the user via your product</h1>
            <p>
              Hop in your product space and observe the experience with your
              participant. This allows you to be in the same space of your
              participant while they try to complete the tasks you assign them.
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="MUT-section-4">
        <div className="MUT-s4-wrapper">
          <h1>Check out our Testing Tools and Guides</h1>
          <p>
            Depending on your product or prototype, you will want to moderate
            the user via video or with them in the product or prototype.
          </p>
          <div className="button-container">
            <Button1 />
            <Button1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MUT;
