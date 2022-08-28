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
import ayushResume from "../../../src/ayush final resume.pdf"


function About() {
  return (
    
    <div className='about'>
      <div className='left'>
<div className='text'>
    <h1>AYUSH SINGLA</h1>
    <p>A FrontEnd Web Developer | HackerRank 5 ⭐| Codechef 3 ⭐</p>
    <p>A person who loves coding and give his minimum of 3 hours a day in learning new skills</p>
    <p>Believes in Consistency</p>
</div>
                           
 <a  style = {{textDecorationLine:"none"}}href={ayushResume} download target="_blank">
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