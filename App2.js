import React from 'react';
import logo from './logo.svg';
import './App.css';



const styles ={
    color: "#FFF", 
    backgroundColor: "#FF1",
    fontSize: 20
}

function App2() {
    return (
        <div>
            <input type="checkbox" />
            <p className="ssss">Male</p>
            
            <input type="checkbox" />
            <p style={styles}>Female</p>
            
            <input type="checkbox" />
            <p style={styles}>Other</p>
            
            <input type="checkbox" />
            <p style={styles}>Exit</p>
        </div>
    )}
  export default App2