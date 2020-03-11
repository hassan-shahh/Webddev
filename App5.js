import React from "react"
import productsData from "./vproducts"
import Products from './Products'

function App5() {
    const productsComp = productsData.map(product => <Products key={product.id} name={product.name} price={product.price} description = {product.description}/>)
  return (
    <div>
        {productsComp}
    </div>
  )
}

export default App5