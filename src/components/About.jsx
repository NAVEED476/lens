import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about-cont">
      <div className="about-us-cont">
        <h1 className="about-us">About Us</h1>
        <div className="under-line"></div>
      </div>
      <div className="welcome-cont">
        <div className="left-cont">
          <div className="welcome-lens">
            <h1>Welcome To LENS</h1>
          </div>
          <div>
            <p className="welcome-sub-text">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don't have
              to.
            </p>
          </div>
          <div class="button_cont" align="center">
            <a class="example_a" href="add-website-here" target="_blank">
              Learn More
            </a>
          </div>
        </div>
        <div className="right-cont">
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
