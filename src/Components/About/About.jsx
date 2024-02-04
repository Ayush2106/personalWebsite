import React from 'react'
import './About.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js logo.png';
import react from '../../img/react.png';
import firebase from '../../img/firebase.png';
import Githublogo from '../../img/Githublogo.png';
import java from '../../img/JAVA.png';
import { motion } from "framer-motion";
import ayushResume from "../../../src/CV_AyushSingla.pdf"
import gdsc from "../../img/gdsc.jpg";
import gcloud from "../../img/gcloud.png";
import ggsoc from "../../img/ggsocf.png";

function About() {
  return (
    
    <div className='about'>
      <div className='left'>
<div className='text'>
    <h1>AYUSH SINGLA</h1>
<p>Works as a Frontend Developer at Creative Gene Digital (Nov '23 - Present).</p>
<p>Worked as a Junior React Native Developer at Aaimaa Web Solutions (Sep '22 - Oct '22).</p>
</div>
{/*    <div className = "logoss">
    <img src = {gdsc} alt =""/>
    <img src = {gcloud} alt =""/>
    <img src = {ggsoc} alt =""/>
   </div> */}
                           
 <a  style = {{textDecorationLine:"none"}}href={ayushResume} download target="_blank" rel = "noreferrer">
   <div className='button'>Download CV</div>
</a>
      </div>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>*/}
      <div className= "RIGHTT">
        <div className='heyy'>
        <div className='right'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}

 className='w-mainCircle'>
    <div className='w-secCircle'>
        <img src = {html} alt = "html_logo" />
    </div>
    <div className='w-secCircle'>
        <img src = {css} alt = "html_logo" />
    </div>
     <div className='w-secCircle'>
        <img src = {js} alt = "html_logo" />
    </div> 
     <div className='w-secCircle'>
        <img src = {react} alt = "html_logo" />
    </div> 
     <div className='w-secCircle'>
        <img src = {firebase} alt = "html_logo" />
    </div> 
    <div className='w-secCircle'>
    <img src = {Githublogo} alt = "html_logo" />
    </div> 
    <div className='w-secCircle'>
    <img src = {java} alt = "html_logo" />
    </div> 
    </motion.div>


<div className = "w-backCircle blueCircle"></div>
<div className = "w-backCircle yellowCircle"></div>
</div>
        </div>
        </div>
    </div>
    
    
  )
}

export default About;
