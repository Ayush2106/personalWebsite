import React from "react";
import "./Resume.css";
import {useState} from 'react';
// import ProjectList from "./List/certifications/ProjectList"
import ProgSkills from "./List/progSkills/ProgSkills";
import Education from "./List/education/education";
import Interest from "./List/Interests/interest";

const Resume = () => {
  const [isActive , setIsActive] = useState("education");

 
  return (
    <div id="r" className="r">

         <div className="leftpart">
          <div className="left1" style={isActive === "education" ? {backgroundColor: "#fca61f"} : {backgroundColor: "whitesmoke"}} onClick={()=> setIsActive("education")}>Education</div>
         <div  className="left1" style={isActive === "prog" ? {backgroundColor : "#fca61f"} : {backgroundColor : "whitesmoke"}}  onClick ={() => setIsActive("prog")}>Programming Skills</div> 
         {/* <div className="left1" style={isActive === "projects" ? {backgroundColor: "#fca61f"} : {backgroundColor: "whitesmoke"}} onClick={()=> setIsActive("projects")}>Certifictions</div> */}
          <div className="left1" style={isActive === "interest" ? {backgroundColor: "#fca61f"} : {backgroundColor: "whitesmoke"}} onClick={()=> setIsActive("interest")}>Interests</div>
          </div> 

        <div className="rightpart">
         {isActive === "prog" && <div className="right1"><ProgSkills/> </div>  } 
         {/* {isActive === "projects" && <div className="right"><ProjectList/></div> }  */}
         {isActive === "education" && <div className="right"><Education/></div> } 
         {isActive === "interest" && <div className="right"><Interest/></div> } 


         
        </div>

    </div>
  );
};

export default Resume;