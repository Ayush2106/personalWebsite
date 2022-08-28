import React from "react";
import "./Resume.css";
import {useState} from 'react';
import ProjectList from "./List/certifications/ProjectList"
import ProgSkills from "./List/progSkills/ProgSkills";

const Resume = () => {
  const [isActive , setIsActive] = useState("prog");

 
  return (
    <div id="r" className="r">

         <div className="leftpart">
            <div  className="left1" style={isActive === "prog" ? {backgroundColor : "#fca61f"} : {backgroundColor : "whitesmoke"}}  onClick ={() => setIsActive("prog")}>Programming Skills</div> 
          <div className="left1" style={isActive === "projects" ? {backgroundColor: "#fca61f"} : {backgroundColor: "whitesmoke"}} onClick={()=> setIsActive("projects")}>Certifictions</div>
          </div> 

        <div className="rightpart">
         {isActive === "prog" && <div className="right1"><ProgSkills/> </div>  } 
         {isActive === "projects" && <div className="right"><ProjectList/></div> } 
        </div>

    </div>
  );
};

export default Resume;