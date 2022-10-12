import React from 'react'
import './Home1.css';
// import amazon from "../../img/amazon.png";
// import instagram from "../../img/instagram.png";
// import linkedin from "../../img/linkedin.png";
// import Github from "../../img/github.png";
import ayush from "../../img/ayushimage.jpeg";
import {  Link } from "react-scroll";


function Home1() {
  return (
    <div className='Home'>
       <div className='lefti'>
        <div className='image'>

          <img src= {ayush} alt = ""/>
        </div>
        </div>
       <div className='righti'>
        <div className='texti'>
        <h1>Hello , This is Ayush Singla</h1>
        <p>A FrontEnd Web Developer | HackerRank 5 ⭐</p>
        <p>Working as an junior React Native developer Intern in Aaimaa Web Solutions,Jodhpur</p>
    <p>A person who loves coding and give his minimum of 3 hours a day in learning new skills</p>
    <Link to="footer" spy={true} smooth={true}>
     <button  className = "button" type='submit'>Hire Me</button>
     </Link>
        </div>
    </div>
    </div>
  )
}

export default Home1