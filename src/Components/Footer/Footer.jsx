import React from 'react'
import './Footer.css';
import './Contact.css';
import emailjs from "emailjs-com";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {


  const sendEmail = (e) =>{
e.preventDefault();
emailjs.sendForm(
  "service_kwe19se",
  "template_mlgvn6i",
  e.target,
  "kZEVum4HFb6FDGhZV"
).then(res =>{
  console.log(res);
}).catch(err =>{
  console.log(err);
})

  }
  return (
    <div className='footer'>
      <div className='form1' >
        <h2>Contact Info</h2>
        <div className='location'>
          <AddLocationAltIcon />
          <p>Db-549 Shyam Nagar Palwal, Haryana</p>
        </div>
        <div className='email'>
          <EmailIcon />
          <p>ayush123singla@gmail.com</p>
        </div>
        <div className='mobile'>
          <PhoneIcon />
          <p>9817406790</p>
        </div>

        <div className='logos'>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <GitHubIcon />
        </div>
      </div>
       <div className='form2'>
       <div className="c-right">
        <form  onSubmit = {sendEmail}>
          <input type="text" name="name" className="user"  placeholder="Name"/>
          <input type="email" name="email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="reset" value="Send" className="button"/>
          <span>{ "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Footer