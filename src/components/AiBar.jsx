import React from "react";
import "./ai.css";

const AiBar = () => {
  return (
    <div className="main-cont">
      <div className="ai-cont1">
        <img
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
          alt=""
        />
      </div>
      <div className="ai-cont2">
        <h1 className="meet-ai">Meet Tru-AI</h1>
        <img className="line-img" src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg" alt="" />
        <h2 className="d-c-d">Design. Create. Deploy.</h2>
        <h3 className="the-future">the Future of AI | Power to EDIT</h3>
        <p className="ai-info">
          Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website
        </p>

        <a class="example_a" href="add-website-here" target="_blank">
          Learn More
        </a>
      </div>

      <div className="video-cont">
        <video
          src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
          autoPlay
          muted
          loop
          width="100%"
          height="auto"
        ></video>
      </div>
    </div>
  );
};

export default AiBar;
