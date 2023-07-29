import React from 'react'
import "./progSkills.css";
const ProgSkills = () => {
  return (
    <div className="ps-container">
                                   {/* .................................... */}
      <div className="leftps">
 {/* 1>>>   */}
        <div className="ps-skills">
          <div className="ps-details">
            <span>ReactJS</span>
            <span>90%</span>
          </div>
          <div className="ps-bar">
            <div id="html-bar"></div>
          </div>
        </div>
 {/* 2>>>  */}
        <div className="ps-skills">
          <div className="ps-details">
            <span>NodeJs</span>
            <span>70%</span>
          </div>
          <div className="ps-bar">
            <div id="css-bar"></div>
          </div>
        </div>
{/* 3>>> */}
        <div className="ps-skills">
          <div className="ps-details">
            <span>ExpressJS</span>
            <span>50%</span>
          </div>
          <div className="ps-bar">
            <div id="js-bar"></div>
          </div>
        </div>
{/* 4>>>>*/}
        <div className="ps-skills">
          <div className="ps-details">
            <span>MongoDb</span>
            <span>60%</span>
          </div>
          <div className="ps-bar">
            <div id="react-bar"></div>
          </div>
        </div>
{/* 5>>>> */}
        <div className="ps-skills">
          <div className="ps-details">
            <span>Redux</span>
            <span>60%</span>
          </div>
          <div className="ps-bar">
            <div id="redux-bar"></div>
          </div>
        </div>
      </div>
                         {/* ............................................ */}


      <div className="rightps">
  {/* 1>>> */ }      
        <div className="ps-skills">
          <div className="ps-details">
            <span>Java</span>
            <span>60%</span>
          </div>
          <div className="ps-bar">
            <div id="java-bar"></div>
          </div>
        </div>
{/*2>>>>*/}
        <div className="ps-skills">
          <div className="ps-details">
            <span>Git and Github</span>
            <span>80%</span>
          </div>
          <div className="ps-bar">
            <div id="git-bar"></div>
          </div>
        </div>
{/*3>>>>*/}
        <div className="ps-skills">
          <div className="ps-details">
            <span>Firebase</span>
            <span>50%</span>
          </div>
          <div className="ps-bar">
            <div id="firebase-bar"></div>
          </div>
        </div>
{/* /*4>>>> */}
<div className="ps-skills">
          <div className="ps-details">
            <span>ReactNative</span>
            <span>50%</span>
          </div>
          <div className="ps-bar">
            <div id="native-bar"></div>
          </div>
        </div>
        {/* /*5>>.. */}
      </div>

</div>
  )
}

export default ProgSkills