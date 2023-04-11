import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import HomeTabs from '../src/components/HomeTabs';
import Footer from '../src/components/footer';
import Images from "./images/rk.jpg"

function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <Header />
        <img src={Images}  
           className="app-images" alt="rk" 
          />
      </header>
      <HomeTabs />
      </div>
    <div><Footer/>
    </div></div>
  );
}

export default App;
