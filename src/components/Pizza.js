import React from "react"

const isVegetarian = (pizza) =>{
   if(pizza){
     return "Yes"
   }else{
     return "No "
   }
}

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{isVegetarian(props.pizza.vegetarian)}</td>
      <td><button type="button" className="btn btn-primary" onClick={()=>props.handleEdit(props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
