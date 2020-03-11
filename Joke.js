import React from "react"

import jokedata from "./jokedata"




function Joke(props){
    return(
        <div>
        <h3 style = {{display: props.question ? "block" : "none"}}>{props.question}</h3>
        <h2>{props.punchLine}</h2>
        </div>
    )
}
export default Joke