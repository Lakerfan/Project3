import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router as Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Route path='../routing/Thrill.js'
    
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Route> */}
      </header>
    </div>
  );
}

export default App;
