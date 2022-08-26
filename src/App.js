import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Card from './Card'

function App() {
  const testing = () => {
    alert('pop up modal where people can upload items');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={require('./revelliePicture.jpg')}/>
        <p>Aggie Market</p>
        <div className="topnav-right">
          <button className='header-btn'>Log in</button>
          <button className='header-btn'>Sign up</button>
        </div>
      </header>

      <body>
        <section className='categories-section'>
          <button className='upload-btn' onClick={testing}>
            <h2>Upload Item</h2>
          </button>
          <button className='nav-btn'>
            New Items
            <img src="arrow.png" className='arrow'/>
          </button>
          <button className='nav-btn'>
            Textbooks
            <img src="arrow.png" className='arrow'/>
          </button>
          <button className='nav-btn'>
            Electronics
            <img src="arrow.png" className='arrow'/>
          </button>
          <button className='nav-btn'>
            Life
            <img src="arrow.png" className='arrow'/>
          </button>
          <button className='nav-btn'>
            Accessories
            <img src="arrow.png" className='arrow'/>
          </button>
          <button className='nav-btn'>
            Others
            <img src="arrow.png" className='arrow'/>
          </button>
        </section>
        <section className='items-section'>
          <div className='container'>
            <Card image="monitor.png" itemName="LG Monitor" owner="Deano Orensteino" price={199.0}/>
            <Card image="science.png" itemName="Science II 6th Edition" owner="Amir Zeltzer" price={19.0}/>
            <Card image="gamingchair.png" itemName="GT Racing Gaming Chair" owner="Sean Chen" price={149.0}/>
            <Card image="headphones.png" itemName="Noise Cancelling Headphones" owner="Deano Orensteino" price={199.0}/>
            <Card image="mouse.png" itemName="Computer Mouse" owner="Deano Orensteino" price={19.99}/>
            <Card image="history.png" itemName="History II 5th Edition" owner="Deano Orensteino" price={30.0}/>
          </div>
        </section>
      </body>
    </div>
  );
}


export default App;
