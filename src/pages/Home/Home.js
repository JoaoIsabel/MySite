import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import img1 from "../../Images/img1.jpg";
import "./home.css";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div class="backgroundImg">
        <div className="hompageText">
          <p>Hello,</p>
          <p>
            {" "}
            I'm finishing my FullStack Developer Bootcamp, so i would like to
            send you my CV for opportunities you may have. I have 10 years
            experience in the management / finance / reporting area, but I
            discovered my passion for code so I changed my career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
