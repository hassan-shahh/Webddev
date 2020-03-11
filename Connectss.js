import React, { Component } from 'react'

class Connectss extends Component{
    constructor(){
        super();
        this.state = {
            customers : []
        }
    }
    componentDidMount(){
        fetch('/types')
        .then(res => res.json())
        .then(arr => this.setState({customers:arr})
        )}

  
    render(){
        return(
            <div>
               <ul>
               { this.state.customers.map (arr => 
               <li key={arr.UserRoleID}>{arr.UserName} {arr.UserRoleID}</li>)}

               </ul>
            </div>
          )  }

    

}
export default Connectss