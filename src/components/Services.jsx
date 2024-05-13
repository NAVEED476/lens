import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div className="services-cont">
      <div className="servie-us-cont">
        <h1 className="service-us">SERVICES</h1>
        <div className="under-line"></div>
        <h1 className="service-moto">We provide Artificial Intelligence Services</h1>
      </div>

      <div className="services-info">
        <div className="service-box service-box1">
          <div className="service-box-header">
            <h1 className="numeric">0</h1>
            <h1 className="numeric value-color">1</h1>
            <h1 className="service-name">Biometrics</h1>
          </div>
          <p className="service-desc">
            Academia-backed & In-house researched State-of-the-Art Face,
            Fingerprint, and Iris Recognition SDKs. Enable real-time automated
            Biometric applications on edge devices even without an active
            internet connection.
          </p>
        </div>

        <div className="service-box service-box2">
          <div className="service-box-header">
            <h1 className="numeric">0</h1>
            <h1 className="numeric value-color2">2</h1>
            <h1 className="service-name service-name2">Image Analysis</h1>
          </div>
          <p className="service-desc">
            Outsource the overly complex image analysis work to our intelligent
            machines that adaptively learn, so you can focus on making the best
            decisions for your business.
          </p>
        </div>
      </div>
      <div className="services-info">
        <div className="service-box service-box3">
          <div className="service-box-header">
            <h1 className="numeric">0</h1>
            <h1 className="numeric value-color3">3</h1>
            <h1 className="service-name3">Cross-Media Translation</h1>
          </div>
          <p className="service-desc">
            Will something like Siri or Alexa enhance your business? We can
            deliver text-to-speech, text-to-image, speech-to-text,
            speech-to-image, speech-to-image, image-to-text and image-to-speech
            solutions for maximum convenience.
          </p>
        </div>
        <div className="service-box service-box4">
          <div className="service-box-header">
            <h1 className="numeric">0</h1>
            <h1 className="numeric value-color4">4</h1>
            <h1 className="service-name4">3D Modelling and Design.</h1>
          </div>
          <p className="service-desc">
            Will something like Siri or Alexa enhance your business? We can
            deliver text-to-speech, text-to-image, speech-to-text,
            speech-to-image, speech-to-image, image-to-text and image-to-speech
            solutions for maximum convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
