import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ExperienceCards from './ProjectsCards';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faMdb, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import '../App.css';


function HomeTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList class = "TabList">
      <Tab >About Me</Tab>
      <Tab >Projects</Tab>
      <Tab >Skills</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
    <div className='AboutMe'> <p>As a MERN stack developer , I have worked on a variety of web applications, ranging from simple CRUD apps to more complex, feature-rich platforms. My expertise in MongoDB, Express, React, and Node.js allows me to create dynamic and responsive user interfaces, as well as robust back-end systems.</p><p> I specialize in building full-stack web applications using the MERN (MongoDB, Express, React, Node.js) technology stack. This means that I have expertise in all of the key technologies involved in building modern, dynamic web applications.

    <p>Specifically, my skills as a MERN stack developer include:</p>

<p>1. Building and designing scalable, robust, and efficient server-side applications using Node.js and Express.js.</p>

<p>2. Designing and implementing secure, reliable, and performant database architectures using MongoDB, and writing efficient MongoDB queries to fetch data.</p>

<p>3. Developing interactive and responsive front-end user interfaces using React.js, JavaScript, HTML, and CSS, and integrating with server-side APIs using asynchronous calls.</p>

<p>4. Utilizing Redux or other state management libraries to manage the application state in React applications.</p>
<p>5. Deploying and hosting MERN stack applications using cloud platforms such as AWS, Azure, or Heroku.</p>

</p>
     <p>I am passionate about creating high-quality web applications that meet the needs of users and businesses alike. Whether it's building a custom e-commerce platform, developing a real-time chat app, or creating a social media platform, I am confident in my ability to deliver exceptional results. If you're interested in working with me, please don't hesitate to get in touch!</p></div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <div className='icons-list'>
        <div className='cards-icons'>
      <a
          className="faLinkedin app-link social-media"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faHtml5} size="2x" />
        </a>
        <p>Proficient in writing semantic HTML that follows best practices and web standards
Experience creating responsive and accessible web pages using HTML5 and CSS3
Familiarity with popular HTML frameworks and libraries such as Bootstrap and Foundation</p>
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faCss3} size="2x"/>
        </a>
        <p>Strong understanding of CSS3 and the latest CSS techniques
Experience using pre-processors such as SASS and LESS to write modular and maintainable CSS
Ability to create responsive designs that adapt to different screen sizes and devices
</p>
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faJsSquare} size="2x" />
        </a>
         <p>Proficient in JavaScript and familiar with the latest ECMAScript standards
Experience using popular front-end frameworks such as React and AngularJS
Strong understanding of asynchronous programming and callback functions
Knowledge of Node.js and the ability to build scalable and efficient server-side applications </p>
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon className='icon' icon={faReact} size="2x" />
        </a>
        <p>React: I am highly skilled in building complex user interfaces using React, and have worked with libraries such as Redux, React Router, and Material-UI.</p>
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faNode} size="2x" />
        </a>
        <p>Node.js: I have a strong understanding of the Node.js runtime environment, and am capable of building scalable and efficient server-side applications.</p>
        
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        > <FontAwesomeIcon icon={faNodeJs} size="2x" /> 
        </a>
        <p>Express: I am proficient in using Express to create RESTful APIs, and am familiar with middleware, routing, and error handling.</p>
        
        </div>
        <div className='cards-icons'>
        <a
          className="faLinkedin app-link social-media"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        > <FontAwesomeIcon icon={faMdb} size="2x" /> 
        </a>
        <p>MongoDB: I have extensive experience working with MongoDB, and am comfortable designing database schemas, writing queries, and optimizing performance.</p>
        
        </div>
        
        
      </div>
    </TabPanel>
    <TabPanel>
      <div><ContactForm/></div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;