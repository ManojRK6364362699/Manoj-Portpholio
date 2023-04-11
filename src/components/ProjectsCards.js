import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function ProjectsCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>E-commerce Website</h2></Card.Title>
          <Card.Text>
            <h4>E-commerce website using React JS. Application stack used in this website is bootstrap,Javascript,React JS and CSS. Features of this website are login,Sign up,Add Reviews,Comments and My Profile.            
            </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>CRUD Application website</h2></Card.Title>
          <Card.Text>
            <h4>CURD Application using MERN Stack.Application stack used in this website is Mongo DB,Express JS,Reacts JS,Node JS and Bootstrap. Features of this website are login,Sign up,Add Reviews,Comments and My Profile. </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Simple Projects on Javascript </h2></Card.Title>
          <Card.Text>
            <h4>Javascript Projects like calculator,todo list,portpolio,website frontend</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      
      </div>
} 

export default ProjectsCards;