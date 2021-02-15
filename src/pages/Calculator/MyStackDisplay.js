import React from "react";
import reactIcon from "../../Images/reactIcon.png";
import jsIcon from "../../Images/jsIcon.png";
import htmlIcon from "../../Images/htmlIcon.png";
import cssIcon from "../../Images/cssIcon.png";
import nodejsIcon from "../../Images/nodejsIcon.png";
import expressIcon from "../../Images/expressIcon.png";
import npmIcon from "../../Images/npmIcon.png";
import gitIcon from "../../Images/gitIcon.png";
import githubIcon from "../../Images/githubIcon.png";
import figmaIcon from "../../Images/figmaIcon.png";
import "./calculator.css";

function MyStackDisplay() {
  return (
    <div>
      <div className="stackList">
        <img className="icons" src={reactIcon} alt="React Icon" />
        <img className="icons" src={jsIcon} alt="JS Icon" />
        <img className="icons" src={htmlIcon} alt="HTML Icon" />
        <img className="icons" src={cssIcon} alt="CSS Icon" />
        <img className="icons" src={nodejsIcon} alt="NODE JS Icon" />
        <img className="icons" src={expressIcon} alt="Express Icon" />
        <img className="icons" src={npmIcon} alt="Npm Icon" />
        <img className="icons" src={gitIcon} alt="Git Icon" />
        <img className="icons" src={githubIcon} alt="Github Icon" />
        <img className="icons" src={figmaIcon} alt="Figma Icon" />
      </div>
    </div>
  );
}

export default MyStackDisplay;
