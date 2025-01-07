import React from 'react'
import './Home1.css';
// import amazon from "../../img/amazon.png";
// import instagram from "../../img/instagram.png";
// import linkedin from "../../img/linkedin.png";
// import Github from "../../img/github.png";
import ayush from "../../img/ayushimage.jpeg";
import {Link } from "react-scroll";


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
        <h1>Hello, This is Ayush Singla</h1>
       <p> Passionate MERN stack developer, skilled in React.js with a hunger for learning and staying updated with new
        technologies.</p>
        <p> Freelancer with a track record of delivering high-quality projects. Committed to innovation and
        seeking opportunities to excel in the field of computer science. </p>
        {/* <p>Working as an junior React Native developer Intern in Aaimaa Web Solutions,Jodhpur</p> */}
    <Link to="footer" spy={true} smooth={true}>
     <button  className = "button" type='submit'>Hire Me</button>
     </Link>
        </div>
    </div>
    </div>
  )
}

export default Home1
