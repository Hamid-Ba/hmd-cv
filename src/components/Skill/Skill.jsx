import React from "react";
import PropTypes from "prop-types";

const Skill = ({skill}) => {
  return (
    <div
      className="skill--box"
      style={{backgroundColor : "rgb(234, 234, 234)" , boxShadow : "rgba(233, 173, 53, 0.3) 0px 0px 30px"}}>
    {
        skill === "#C" ? 
        <>
            <img src="images/svg/skills/csharp.svg" alt={skill} />
            <h3 style={{color : "rgb(33, 33, 33)"}}>{skill}</h3>
        </>
        :
        <>
            <img src={`images/svg/skills/${skill.toLowerCase()}.svg`} alt={skill} />
            <h3 style={{color : "rgb(33, 33, 33)"}}>{skill}</h3>
        </>
    }
    </div>
  );
};

Skill.PropType = {
  skill : PropTypes.string
}

export default Skill;
