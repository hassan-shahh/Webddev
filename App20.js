import React, {Component} from "react"
import Conditional from "./Conditional"

class App20 extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            color : "BOOOM"
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1000)
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1 >Loading...</h1> :
               <Conditional color = {this.state.color}/>}
            </div>
        )
    }
}

export default App20