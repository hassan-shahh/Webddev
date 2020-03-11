import React from "react"
import TodoItem from "./todooitem"
import todosData from "./tododata"

class App13 extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
      this.setState(prevState => {
        const updateTodos= prevState.todos.map(todos=>{
            if (todos.id === id){
                todos.completed = !todos.completed
            }
            return todos
        })
        return {todos: updateTodos}
      
    })}
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App13