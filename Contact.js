import React from 'react'

function Contact(props){
return(<div>
<img src = {props.imgUrl}></img>
<h3>{props.name}</h3>
<p>{props.phone}</p>
<p>{props.email}</p>

</div>
)
}
export default Contact



