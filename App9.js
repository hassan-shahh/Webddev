import React, { Component } from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App9 extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
   render(){
       let worddisplay
       if (this.state.isLoggedIn==true)
           worddisplay= "in"
        else{
            worddisplay="out"
       }
    return (
        <div>
            <h1>You are currently logged {worddisplay}</h1>
        </div>
    )
}
}

export default App9