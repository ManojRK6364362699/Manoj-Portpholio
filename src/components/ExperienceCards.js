import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function ProjectsCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>E-commerce</h2></Card.Title>
          <Card.Text>
            <h4>e-commerce this a i aa fjasdfja sdajsdgagk jtjakladfadfadfadsfa a adjfa a dfja f
            </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>Customer Segmentation</h2></Card.Title>
          <Card.Text>
            <h4>The project uses unsupervised learning algorithms to cluster customers into groups based on purchasing data(Under Udacity). </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Car Class Prediction </h2></Card.Title>
          <Card.Text>
            <h4>A supervised learning approach to 
              predict the type of car based on evaluation of features using supervised learning algorithms and 
              then choosing the best model.</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>Customer Segmentation</h2></Card.Title>
          <Card.Text>
            <h4>The project uses unsupervised learning algorithms to cluster customers into groups based on purchasing data(Under Udacity). </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ProjectsCards;