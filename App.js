import React from 'react';
import logo from './logo.svg';
import './App.css';
const Fname = "Hassan"
const Lname = "Shah"
const date = new Date();
const hours = date.getHours()

function App() {
  const styles ={
    color: "#FF8C00", 
    backgroundColor : "#FF2D00"
  }
  let timeofday
  if(hours<12)
    timeofday='Morning'
    else if (hours>12 && hours<6)
    timeofday="Afternoon"
    else
    timeofday="night"
  return (
        <h1 style={styles}>
        I'll meet you at {timeofday} 
      
      </h1>
  )
}

export default App;
