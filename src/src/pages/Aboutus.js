import React from "react";
import Contactform from "../components/Contactform";
import Separator from "../components/Separator";
import Teamcard from "../components/Teamcard";
import "../css/Aboutus.css";
import about from "../images/about.png";
import mission from "../images/mission.png";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import team4 from "../images/team4.png";
import team5 from "../images/team5.png";
import team6 from "../images/team6.png";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="a-section-1">
        <div className="a-s1-wrapper">
          <div className="a-s1-divL">
            <h1 className="a-s1-title">About us</h1>
            <p>
              At Immersive Insights, we are dedicated to improving the user
              experience of XR products and applications. Founded in 2022, we
              have quickly established ourselves as a leading provider of
              usability testing services for VR/AR developers and researchers.
            </p>
            <br></br>
            <p>
              Our platform connects developers and researchers with a diverse
              pool of XR users for usability testing and user interviews. By
              leveraging our expertise and technology, we enable our clients to
              gain invaluable insights into their product's strengths and
              weaknesses, and make data-driven decisions that improve the
              overall user experience. Our passion for XR technology and
              user-centered design drives us to deliver the most effective
              testing solutions to help our clients achieve their goals.
            </p>
          </div>
          <div className="a-s1-divR">
            <img className="about-img" src={about} />
          </div>
        </div>
      </div>
      <Separator />
      <div className="a-section-2">
        <div className="a-s2-wrapper">
          <div className="a-s2-div1">
            <h1>Our Mission</h1>
            <p>
              Our mission at Immersive Insights is to help developers and
              researchers create more intuitive and user-friendly XR
              experiences. We believe that usability testing is essential for
              achieving this goal and are passionate about making it accessible
              and affordable for all.
            </p>
            <br></br>
            <p>
              We are also committed to educating and equipping the next
              generation of UX professionals. We believe that by sharing our
              knowledge and providing helpful resources, we can help drive
              innovation and elevate the field of XR usability testing. Whether
              through our blog, webinars, or other channels, we are dedicated to
              empowering developers, researchers, and testers to create the best
              possible XR experiences for users.
            </p>
          </div>
          <div className="a-s2-div2">
            <img className="mission-img" src={mission} />
          </div>
        </div>
      </div>
      <Separator />
      <div className="a-section-3">
        <div className="a-s3-wrapper">
          <div className="a-s3-div1">
            <h1>Our Team</h1>
            <p>
              Our company is comprised of experts in XR development,
              human-computer interaction, and user research. With years of
              experience in the field, we bring a wealth of knowledge and
              insight to every project we undertake.
            </p>
          </div>
          <div className="teamcard-container">
            <div class="grid-container">
              <Teamcard img={team1} name="Jonathan Doe" position="CEO" />
              <Teamcard
                img={team2}
                name="Yaela Barmovich"
                position="Product Manager"
              />
              <Teamcard
                img={team3}
                name="Jason Felix"
                position="Software Engineer"
              />
              <Teamcard
                img={team4}
                name="Xena Shaffar"
                position="XR Developer"
              />
              <Teamcard img={team5} name="Sara Ocean" position="UX Designer" />
              <Teamcard
                img={team6}
                name="Tyler Smith"
                position="UX Researcher"
              />
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="a-section-4">
        <Contactform />
      </div>
    </div>
  );
};

export default Aboutus;
