import React, { Component } from "react"
import TodoItem from "./todoitem"
import todosData from "./tododata"
import './todo.css'

class App10 extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
    }}
   
    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} text={item.text} completed={item.completed}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
}
export default App10