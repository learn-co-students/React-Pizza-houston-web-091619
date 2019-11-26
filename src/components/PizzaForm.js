import React from "react"

const veganYes = (veganPiz)=>{
  if(veganPiz){
    return true
  }else{
    return false
  }
}

const veganNo = (meat)=>{
  if(meat===false){
    return true
  }else{
    return false
  }
}

const PizzaForm = (props) => {
  // let arr = [props.pizza.size]
  console.log(props.pizza.size)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={props.pizza.topping}
            onChange={(event)=>props.handleTopping(event.target.value)} />
        </div>
        <div className="col">
          <select onChange={(event)=>props.handleSize(event.target.value)} value={props.pizza.size}  className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={veganYes(props.pizza.vegetarian)} onClick={()=>props.handleVegan(props.pizza.vegetarian)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={veganNo(props.pizza.vegetarian)} onClick={()=>props.handleVegan(props.pizza.vegetarian)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.editPizza(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
