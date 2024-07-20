import React from 'react'
import instagram from "../../img/instub.png";
import linkedin from "../../img/linkedinb.png";
import Github from "../../img/Githublogo.png";
import './index.css';
// import wave from "../../img/wave (3)ayush.png";
import wave from "../../img/wave.png";

function index() {
  return (
    <div className='end'
    style={{backgroundImage:`url(${wave})` ,width:"100%", position:"relative"}}
    >
    
   {/* asdfg */}
   
   
    <div className='icon1box'>
<img className = "icon1" src = {instagram} alt ="instagram" 
onClick={(e) => {
  e.preventDefault();
  window.location.href='https://www.instagram.com/ayuussh_21/';
  }}
 />
<img className = "icon1" src = {linkedin}  alt = "linkedin"
onClick = {(e) =>{
  e.preventDefault();
  window.location.href = "https://www.linkedin.com/in/ayush-singla-04801b185/";
}}
/>
<img  className = "icon1" src = {Github}  alt = "github"
onClick = {(e) =>{
  e.preventDefault();
  window.location.href="https://github.com/Ayush2106";
}}
/>
      </div>
</div>
  )
}

export default index