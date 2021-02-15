import React from "react";
import ReactPlayer from "react-player";
import NavBar from "../../components/NavBar/NavBar";
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
import portfolioVideo from "../../Images/portfolioVideo.mp4";
import "./aboutMe.css";

function AboutMe() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="aboutMeBody">
        <div className="leftColumn">
          <div>
            <p className="ExperienceListTitle">Life Chronology</p>
            <ul className="ExperienceList">
              <li>2020/2021 - Bootcamp Web Development at Wild Code School</li>
              <li>2020 - Responsive websites w/ HTML5 and CSS3 at Udemy</li>
              <li>
                2017/2020 - Manager/Owner at Portugal Roots (Tour and Transfers)
              </li>
              <li>
                2014/2017 - Sub-Director of Operations Department at Banco
                Finantia
              </li>
              <li>2012/2014 - Controller/Analyst at Neodent</li>
              <li>2012 - Trainer Certification (CAP) at INEPI</li>
              <li>2010/2012 - Financial Controller at Grupo VivaMais</li>
              <li>2009/2010 - Reporting / Performance Analyst AC Nielsen</li>
              <li>
                2004/2010 - Management Master Degree Instituto Superior de
                Gestão
              </li>
            </ul>
          </div>
        </div>
        <div className="rightColumn">
          <div className="movie">
            <ReactPlayer
              url={portfolioVideo}
              playing="false"
              controls="true"
              width="80%"
              height="0"
            />
          </div>
          <div className="stackList">
            <p>My Stack</p>
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
          <div className="stackList">
            <p>Currently learning</p>
            <img className="icons" src={reactIcon} alt="React Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
