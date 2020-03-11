import React, { Component } from 'react';

class PostForm extends Component {
    constructor() {
        super();


        this.state = {
            UserName: '',
            UserRoleID: ''

        }
        this.handlechange = this.handlechange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    handlechange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler() {
        fetch('http://localhost:4000/asdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "UserName": this.state.UserName,
                'UserRoleID': this.state.UserRoleID
            }
            )
        })
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div> <input type="text" name="UserName" value={this.state.UserName} onChange={this.handlechange} placeholder="User Name" /> </div>
                    <div> <input type="text" name="UserRoleID" value={this.state.UserRoleID} onChange={this.handlechange} placeholder="User ID" /> </div>
                </form>
                <button type="submit" onClick={this.submitHandler}>CLUCCCCCk</button>
            </div>
        );
    }
}



export default PostForm;
