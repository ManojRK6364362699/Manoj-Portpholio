import React from 'react'; 
import '../App.css';
import Pdf from '../pdf/resume.pdf';
import Images from "../images/icons8-cv-64.png"


// This is a functional component 
function Header() 
{ 
        return (<div className='Header'><h3 className="h3-text">Hello! I'm Manoj.R.K</h3> 
        <h2 className='h2-text'>
        I am MERN stack developer.</h2>
        
         <div className = "App">
          <a href = {Pdf} target = "_blank"><img src={Images}  
           className="header-images" alt="resume" 
          /> </a>
        </div>
</div>)
} 

export default Header;