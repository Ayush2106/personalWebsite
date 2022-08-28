import React from 'react'
import "./projectlist.css";
// import Html from '@mui/icons-material/htmlb';
// import CssIcon from '@mui/icons-material/Css';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import GitHubIcon from '@mui/icons-material/GitHub';
import Html from '../../../../img/htmlb.png';
import Css from "../../../../img/cssb.png";
import Js from "../../../../img/jsb.png";
import react from "../../../../img/reactb.jpg";
import forage from "../../../../img/forageb.png"
import java from "../../../../img/javab.png";


const ProjectList = () => {
  
  return (
    <div className="Certificate">

       <div className='skill'>
     <img className='logo' src = {forage} alt = "" />
      <div className='link'>
      <button className="btn" 
       onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_PfHrXtFY4gxfsPgQk_1660637597868_completion_certificate.pdf";
      }}>Download Certificate </button>

      </div>
     </div>
 {/*>>>>>**/}
 
     <div className='skill'>
      <img className='logo' src = {Html} alt = "" />
      <div className='link'>
      <button className="btn" 
      onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://www.linkedin.com/learning/certificates/dce903355f487748050bc65a021dc6d5ff399247b15fed62932ec4f589fd5bc4?trk=share_certificate";
      }}
      
      >Download Certificate </button>
      </div>
     </div>

 {/*>>>>>**/}
     <div className='skill'>
     <img className='logo' src = {Css}  alt = ""/>
      <div className='link'>
      <button className="btn"
       onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://www.linkedin.com/learning/certificates/0e99e9f6b42a44e9b5878badec22bf33e8ebb18216a0efae0d3544aefe4f77cc?trk=share_certificate";
      }}
      >Download Certificate </button>

      </div>
     </div>

  {/*>>>>>**/}
     <div className='skill'>
     <img className='logo' src = {Js} alt ="" />
      <div className='link'>
      <button className="btn"
       onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://www.linkedin.com/learning/certificates/cdda1f6a76058e49cd480a2885c3eef171bb803683be829669520a86fccdeb2d?trk=share_certificate";
      }} >Download Certificate </button>

      </div>
     </div>

 {/*>>>>>**/}
     <div className='skill'>
     <img className='logo' src = {react} alt ="" />
      <div className='link'>
      <button className="btn" 
       onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://www.linkedin.com/learning/certificates/1a6b02a3ad7bee76089384128e95f5aa3fe8d31bd24f2cf4adaf860c32b67c49?trk=share_certificate";
      }}>Download Certificate </button>

      </div>
     </div>

 
    

 {/*>>>>>**/}
     <div className='skill'>
     <img className='logo' src = {java} alt = "" />
      <div className='link'>
      <button className="btn"
       onClick={(e)=>{
        e.preventDefault();
window.location.href = "https://www.linkedin.com/learning/certificates/8ff35891c62479549d882c30b7cadec2674e600584c126557e5e35dd52bf1951?trk=share_certificate";
      }} >Download Certificate </button>

      </div>
     </div>

    </div>
  )
}

export default ProjectList;