import React from 'react'
import data from './tododata'
import Todoitem from './todoitem'


function App6(){
    const mapdata = data.map(x => < Todoitem key={x.id}  text={x.text} completed={x.completed}/>)

    return(
        <div>
        {mapdata}
        </div>
    )
 
}
export default App6