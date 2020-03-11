import React, { Component } from "react"




function doo() {
console.log("JIYooo")
}


    
class App11 extends Component {
    render(){
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={doo}>Click me</button>
        </div>
    )
}
}

export default App11
