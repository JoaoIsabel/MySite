import React from "react";
import AboutMeDisplay from "./AboutMeDisplay";
import MyStackDisplay from "./MyStackDisplay";
import "./calculator.css";

// const
function Calculator() {
  return (
    <div className="container">
      <div className="output">
        {/* <AboutMeDisplay></AboutMeDisplay> */}
        <MyStackDisplay></MyStackDisplay>
      </div>
      <div className="buttons">
        <div className="row1">
          <div className="row1left">About Me</div>
          <div className="row1right">My Stack</div>
        </div>
        <div className="row2">
          <div className="row2left">Portfolio</div>
          <div className="row2right">Contacts</div>
        </div>
        <div className="row3">
          <div className="row3left">Curiosities about me</div>
          <div className="row3right">Live Chat with me</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
