import React from "react";
import { FaLinkedin, FaGithub, FaSkype, FaMobileAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function ContactsDisplay() {
  return (
    <div className="contactseoutput">
      <div className="contactsOutputRow">
        <FaLinkedin className="linkedinIcon"></FaLinkedin>
        linkedin.com/in/joaoisabel
      </div>
      <div className="contactsOutputRow">
        <FaGithub className="githubIcon"></FaGithub>
        github.com/JoaoIsabel
      </div>
      <div className="contactsOutputRow">
        <FaSkype className="githubIcon"></FaSkype>
        joao.alves.isabel_1
      </div>
      <div className="contactsOutputRow">
        <FaMobileAlt className="githubIcon"></FaMobileAlt>
        +351 916345493
      </div>
      <div className="contactsOutputRow">
        <AiFillMail className="githubIcon"></AiFillMail>
        joao.alves.isabel@gmail.com
      </div>
      <div className="contactsOutputRow">
        <FaGithub className="githubIcon"></FaGithub>
        github.com/JoaoIsabel
      </div>
    </div>
  );
}

export default ContactsDisplay;
