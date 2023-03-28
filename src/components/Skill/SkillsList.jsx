import React from "react";
import Skill from "./Skill";

const SkillsList = () => {
  
    const skills = ["Python","Django","#C","React"]

  return (
    <div
      id="skills"
      className="skills"
      style={{backgroundColor : "rgb(234, 234, 234)"}}
    >
      <div className="skillsHeader">
        <h2 className="color-primary">مهارت ها</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <div
            className="marquee-container">
            <div
              className="marquee"
              style={{direction:"normal"}}
            >
              {skills.map((item,index) => <Skill key={index} skill={item}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
