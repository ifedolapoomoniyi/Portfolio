import React from "react";
import {
  UilJavaScript,
  UilHtml5,
  UilCss3Simple,
  UilOBS,
  UilGithub,
} from "@iconscout/react-unicons";
import "../Styles/Skills.css";

const Skills = () => {
  const fontSize = { size: 160 };
  return (
    <div className="Skills" id="skills">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>
          I am like a magician when I work with any of the following technologies
        </p>
      </div>
      <div className="skill-body">
        <div>
          <UilHtml5 size={fontSize.size} color="#F16529" />
          <div>Html5</div>
        </div>
        <div>
          <UilCss3Simple size={fontSize.size} color="#2965f1" />
          <div>Css3</div>
        </div>
        <div>
          <UilJavaScript size={fontSize.size} color="#f7df1e" />
          <div>Javascript</div>
        </div>
        <div>
          <UilGithub size={fontSize.size} />
          <div>Github and Git</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
