import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PARA1, PARA2, PARA3, PARA4, PARA5, PARA6 } from "../constants/constants";
import "./getToKnow.css";

const GetKnow = () => {
  const getKnowArray = [
    {
      specs: "Do i need to sign a contract?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA1
    },
    {
      specs: "How do we ensure quality of deliverables?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA2
    },
    {
      specs: "How do i begin collaboration?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA3
    },
    {
      specs: "What services do we offer?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA4
    },
    {
      specs: "How do you ensure user privacy?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA5
    },
    {
      specs: "How can i pay for the services?",
      icon: <MdOutlineKeyboardArrowDown />,
      para: PARA6
    }
  ];

  const [showPara, setShowPara] = useState(false);
  const [selectedPara, setSelectedPara] = useState("");

  const leftContent = getKnowArray.slice(0, 3);
  const rightContent = getKnowArray.slice(3);

  const handleClick = (para) => {
    setSelectedPara(para);
    setShowPara(!showPara);
  };

  return (
    <div className="getKnow-Container">
      <div className="get_heading">
        <h2>GET TO KNOW US</h2>
        <div className="get_underline"></div>
      </div>
      <p className="get_subHeading">Frequently Asked Questions</p>
      <div className="getKnow-content">
        <div className="leftContent">
          {leftContent.map((item, index) => (
            <div key={index} className="box">
              <div onClick={() => handleClick(item.para)} className="faq-quesions">
                <span>{item.specs}</span>
                <span>{item.icon}</span>
              </div>
              {showPara && selectedPara === item.para && <p className="showPara">{selectedPara}</p>}
            </div>
          ))}
        </div>
        <div className="rightContent">
          {rightContent.map((item, index) => (
            <div key={index} className="box">
              <div onClick={() => handleClick(item.para)} className="faq-quesions">
                <span>{item.specs}</span>
                <span>{item.icon}</span>
              </div>
              {showPara && selectedPara === item.para && <p className="showPara">{selectedPara}</p>}

            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default GetKnow;

