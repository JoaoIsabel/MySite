import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import AboutMeDisplay from "./AboutMeDisplay";
import MyStackDisplay from "./MyStackDisplay";
import PortfolioDisplay from "./PortfolioDisplay";
import ContactsDisplay from "./ContactsDisplay";
import CuriositiesDisplay from "./CuriositiesDisplay";
import ChatDisplay from "./ChatDisplay";
import "./calculator.css";

// const
function Calculator() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="output">
          <Route path="/aboutmedisplay" component={AboutMeDisplay} />
          <Route path="/mystackdisplay" component={MyStackDisplay} />
          <Route path="/portfoliodisplay" component={PortfolioDisplay} />
          <Route path="/contactsdisplay" component={ContactsDisplay} />
          <Route path="/curiositiesdisplay" component={CuriositiesDisplay} />
          <Route path="/chatdisplay" component={ChatDisplay} />
        </div>
        <div className="buttons">
          <div className="row1">
            <div className="row1left">
              <Link to="/aboutmedisplay">About Me</Link>
            </div>
            <div className="row1right">
              <Link to="/mystackdisplay">My Stack</Link>
            </div>
          </div>
          <div className="row2">
            <div className="row2left">
              <Link to="/portfoliodisplay">Portfolio</Link>
            </div>
            <div className="row2right">
              <Link to="/contactsdisplay">Contacts</Link>
            </div>
          </div>
          <div className="row3">
            <div className="row3left">
              <Link to="/curiositiesdisplay">Curiosities about me</Link>
            </div>
            <div className="row3right">
              <Link to="/chatdisplay">Live Chat with me</Link>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Calculator;
