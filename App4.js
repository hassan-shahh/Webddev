import React from 'react'
import jokedata from './jokedata'
import Joke from './Joke'



function App4(){

        const jokeComponents=jokedata.map(function(jokke) {
            return(
        <Joke key={jokke.id} question={jokke.question} punchLine={jokke.punchLine}  />)})
        return(
            <div>
                        {jokeComponents}
            </div>)}
       
/* <Joke        
question="What's the best thing about Switzerland?" 
punchLine="I don't know, but the flag is a big plus!"
/>
<Joke  
punchLine="He'll stop at nothing to avoid them!"
/>
<Joke 
question="Hear about the new restaurant called Karma?" 
punchLine="There’s no menu: You get what you deserve."
/>
<Joke 
question="Did you hear about the actor who fell through the floorboards?" 
punchLine="He was just going through a stage."
/>
<Joke 
question="Did you hear about the claustrophobic astronaut?" 
punchLine="He just needed a little space."
/>
</div>
    )
} */
export default App4