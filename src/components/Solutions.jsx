import React, { useState, useEffect } from "react";
import "./solutions.css";

const Solutions = () => {
  return (
    <div className="solution-cards">
      <div className="card">
        <div className="card-name">Exclusive Rights</div>
        <img
          className="card-image"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75"
          alt=""
        />
        <div className="card-desc">
          Our mission is to make an impact in empowering human society with AI.
          Hence, all Intellectual Property Rights belongs to you.
        </div>
      </div>

      <div className="card">
        <div className="card-name">Research Driven</div>
        <img
          className="card-image"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75"
          alt=""
        />
        <div className="card-desc">
          We regularly benchmark our solutions via comparing industry-vide
          evaluations so our partners only get the best that AI can offer.
        </div>
      </div>

      <div className="card">
        <div className="card-name">Plug-and-Play</div>
        <img
          className="card-image"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75"
          alt=""
        />
        <div className="card-desc">
          We provide AI-driven solutions into businesses where they can bring
          tangible value. Each solution is customized as per your needs and
          deployed on any computing device of your choice.
        </div>
      </div>

      <div className="card">
        <div className="card-name">Lifetime Support</div>
        <img
          className="card-image"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75"
          alt=""
        />
        <div className="card-desc">
          Should you face any issues, we are always at your service. We provide
          lifetime technical support & upgrade options.
        </div>
      </div>
    </div>
  );
};

export default Solutions;
