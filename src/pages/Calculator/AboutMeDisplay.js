import React from "react";
import NavBar from "../../components/NavBar/NavBar";

function AboutMeDisplay() {
  return (
    <div className="aboutMeoutput">
      <div>
        <img
          className="aboutMePicture"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHbmtehg62bpA/profile-displayphoto-shrink_200_200/0/1603363570749?e=1620864000&v=beta&t=xGViweuZ1yTSZ4KctGv1mzHIAUWssqVIDQo4-I-NxS4"
          alt="João"
        ></img>
      </div>
      <div className="aboutMeText">
        <p>Hello,</p>
        <p>
          {" "}
          I'm João Isabel, my background is 10 years experience in the
          management / finance / reporting area, but I discovered my passion for
          code so I changed my career.
        </p>
      </div>
    </div>
  );
}

export default AboutMeDisplay;
