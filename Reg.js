import React, { Component } from 'react';



class Reg extends Component {
    constructor() {
        super();


        this.state = {
            FirstName: '',
            Gender: '',
            Email : '',
            Password : '',
            ContactNo : '',
            errors: {
                FirstName: '',
                Email: '',
                Password: '',
              }

        }
        this.handlechange = this.handlechange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    handlechange(event) {

        event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'FirstName': 
      errors.FirstName = 
        value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
      default:
  }
  this.setState({errors, [name]: value}, ()=> {
    console.log(errors)
})
    }
    submitHandler() {
        
        fetch('http://localhost:4000/signupp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'FirstName' : this.state.FirstName,
                'LastName' : this.state.LastName,
                'Gender' : this.state.Gender,
                'Email' : this.state.Email,
                'Password' : this.state.Password,
                'ContactNo' : this.state.ContactNo
            }
            )
        })
    
      
        
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>  First Name: <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handlechange} placeholder="First Name" /> </div>
                    <div>  Last Name: <input type="text" name="LastName" value={this.state.LastName} onChange={this.handlechange} placeholder="Last Name" /> </div>
                    <div><input type="text" name="Email" value={this.state.Email} onChange={this.handlechange} placeholder="Email" /> </div>
                    <div> <input type="text" name="Password" value={this.state.Password} onChange={this.handlechange} placeholder="Password" /> </div>
                    <div> <input type="text" name="ContactNo" value={this.state.ContactNo} onChange={this.handlechange} placeholder="Contact Number" /> </div>

               <label>   <div> Female:   <input type="radio" name="Gender" value="F" checked={this.state.Gender === "F"}  onChange={this.handlechange} /></div> </label>
               <label>  <div> Male:  <input type="radio" name="Gender" value="M"checked={this.state.Gender ==="M"}  onChange={this.handlechange} /></div></label>
                </form>
                <button type="submit" onClick={this.submitHandler}>Sign In</button>
            </div>
        );
    }
}



export default Reg;
