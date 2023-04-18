import React from "react";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Separator from "../components/Separator";

const UUT = () => {
  return (
    <div className="UUT-container">
      <div className="UUT-section-1">
        <div className="UUT-s1-wrapper">
          <h1>Unmoderated Usability Testing</h1>
          <p>
            Conduct unmoderated usability tests by giving users tasks to
            complete on your product or prototype while recording their
            experience.
          </p>
          <div className="button-container">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </div>
      <Separator />
      <div className="UUT-section-2">
        <div className="UUT-s2-wrapper">
          <div className="div-L">
            <h1>
              Receive recorded videos from users trying out your product or
              prototype
            </h1>
            <p>
              This approach provides researchers with valuable insights into how
              users interact with their product, helping them identify pain
              points and areas for improvement. By analyzing the data collected
              from unmoderated usability studies, researchers can make
              data-driven decisions and improve their product to provide a
              better user experience.
            </p>
          </div>
          <div className="div-R">
            <img />
          </div>
        </div>
      </div>
      <Separator />
      <div className="UUT-section-3">
        <div className="UT-s3-wrapper">
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

export default UUT;
