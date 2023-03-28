import React from "react";
import Project from "./Project";
import projects from "../../data/projects"

const ProjectList = () => {
  return (
    <div
      className="projects"
      id="projects"
      style={{backgroundColor : "rgb(234, 234, 234)"}}
    >
      <div className="projects--header">
        <h1 className="color-primary">پروژه ها</h1>
      </div>
      <div className="projects--body">
        <div className="projects--bodyContainer">
          {projects.map((item,index) => <Project key={index} project={item}/>)}
        </div>
        <div className="projects--viewAll">
          <a href="/projects">
            <button className="bg-primary">
              مشاهده همه
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
