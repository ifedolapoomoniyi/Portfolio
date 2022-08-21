import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="About">
        <div className="About-header">
          <h1>About Me</h1>
        </div>
        <div className="About-details">
          Ifedolapo is a light-hearted hardworker, one who loves to get things
          done and is pretty good at what he does. He dreams of being a doctor
          someday, if Asuu allows sha.
        </div>
        <div className="student">
          I'm supposed to be a{" "}
          <strong>medical student in Obafemi Awolowo university</strong> but
          lately the student in me has resigned fate to Asuu. I now spend my
          free time telling everyone who cares to listen that{" "}
          <strong>Messi</strong> is the goat.
        </div>
      </div>
    </div>
  );
};

export default About;
