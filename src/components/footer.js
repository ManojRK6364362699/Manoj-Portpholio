import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() 
{ 
        return <div className='icons-list-footer'>
        <a
          className="faLinkedin app-link social-media-list"
          href="https://www.linkedin.com/in/manoj-r-kadaramandalagi-contactmanojrk/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="faGithub app-link social-media-list"
          href="https://github.com/ManojRK6364362699?tab=overview&from=2022-12-01&to=2022-12-31"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="faWhatsapp app-link social-media-list"
          href="https://wa.me/6364362699?text="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a
          className="faInstagram app-link social-media-list"
          href="https://www.instagram.com/manoj.kadaramandalagi/?igshid=YmJhNjkzNzY%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        
        
</div>  }

export default Footer;