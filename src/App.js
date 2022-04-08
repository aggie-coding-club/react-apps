import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  
  //let [categories, setCategories] = useState(['textbooks', 'electronics', 'life', 'accessories', 'others'])

  const testing = () => {
    alert('pop up modal where people can upload items');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={require('./revelliePicture.jpg')}/>
        <p>Aggie Market</p>
      </header>

      <body>
        <nav className='nav'>
          <div id='upload' onClick={ testing }>
            Upload<br/>
            Items
          </div>
        </nav>
        <nav className='nav'>
          New Items
        </nav>
        <nav className='nav'>
          Textbooks
        </nav>
        <nav className='nav'>
          Electronics
        </nav>
        <nav className='nav'>
          Life
        </nav>
        <nav className='nav'>
          Accessories
        </nav>
        <nav className='nav'>
          Others
        </nav>

      </body>
    </div>
  );
}


export default App;
