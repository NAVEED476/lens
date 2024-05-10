import React from "react";
import "./vision.css";
import { RiGroupFill } from "react-icons/ri";

const Vision = () => {
  return (
    <div>
      <div className="vision-cont">
        <h1 className="vision-us">OUR VISION</h1>
        <div className="under-line"></div>
        <h1 className="vision-moto">AI for Social Good</h1>
        <p className="vision-mission">
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </p>
      </div>
      <div className="devider">
        <div>
          <div className="vision-role">
            <h3 className="q-title">Diversity & Fairness</h3>
            <span className="subtitle">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </span>
          </div>
          <div>
            <span>
              <RiGroupFill />
            </span>
            <span className="dotted-line"></span>
          </div>
        </div>

        <div>
          <div className="vision-role">
            <h3 className="q-title">Regulatory Compliance</h3>
            <span className="subtitle">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.
            </span>
          </div>
          <div>
            <span>
              <RiGroupFill />
            </span>
            <span className="dotted-line"></span>
          </div>
        </div>

        <div>
          <div className="vision-role">
            <h3 className="q-title">Code of Ethics</h3>
            <span className="subtitle">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </span>
          </div>
          <div>
            <span>
              <RiGroupFill />
            </span>
            <span className="dotted-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
