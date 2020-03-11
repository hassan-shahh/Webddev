import products from "./vproducts";

import React from "react"

function Products(props){
    return(
        <div>
    <h2>Name:{props.name}</h2>
  <p>Price:{props.price}$ - {props.description}</p>
    </div>
    )

}
export default Products