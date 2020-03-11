import React from 'react'
class Football extends React.Component {
    constructor(props) {
      super(props)
      this.state ={
      Color : "yes"
      }
      
      
    }
    shoot = (a) => {
        alert(a);
      }
    render() {
      return (
        <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
      );
    }
  }
  
export default Football