import React from "react";
import "./why.css";
import { VscCheck } from "react-icons/vsc";

const WhyToChoose = () => {
  return (
    <>
      <div className="why-cont">
        <h1 className="why-us">WHY CHOOSE LENS</h1>
        <div className="under-line"></div>
        <h1 className="why-moto">AI-driven solutions backed by science</h1>
        <p className="why-mission">
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>
        <div className="solutions">
          <div>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                State-of-the-art solutions
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                Fast & Efficient
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                No extra computation fee
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                No licensing fee
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                Lifetime support & upgrades
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                Plug-and-Play
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                24x7 Progress Monitoring
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <VscCheck
                  className="check-Icon"
                  style={{ marginRight: "14px" }}
                />{" "}
                Incremental Updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyToChoose;
