import React from "react"

class App12 extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(previousState => {
            return{
                count : previousState.count + 1
           }   })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App12
