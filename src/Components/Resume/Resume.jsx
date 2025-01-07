import React from "react";
import "./Resume.css";
import { useState } from "react";
import ProgSkills from "./List/progSkills/ProgSkills";
import Education from "./List/education/education";
import Interest from "./List/Interests/interest";

const Resume = () => {
  const [isActive, setIsActive] = useState("education");

  return (
    <div id="r" className="r">
      <div className="leftpart">
        <div
          className={`left1 ${isActive === "education" ? "active" : ""}`}
          onClick={() => setIsActive("education")}
        >
          Education
        </div>
        <div
          className={`left1 ${isActive === "prog" ? "active" : ""}`}
          onClick={() => setIsActive("prog")}
        >
          Programming Skills
        </div>
        <div
          className={`left1 ${isActive === "interest" ? "active" : ""}`}
          onClick={() => setIsActive("interest")}
        >
          Interests
        </div>
      </div>

      <div className="rightpart">
        {isActive === "prog" && <div className="right" style={{width:'100%'}}><ProgSkills /></div>}
        {isActive === "education" && <div className="right"><Education /></div>}
        {isActive === "interest" && <div className="right"><Interest /></div>}
      </div>
    </div>
  );
};

export default Resume;
