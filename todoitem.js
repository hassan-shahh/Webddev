import React from 'react'                   
import  todata  from "./tododata"


function Todoitem(props){
    return(
<div className= 'todoitem'>
<input type="checkbox" checked={props.completed}/>
    <p>{props.text}</p>
    
</div>
    )
}
export default Todoitem