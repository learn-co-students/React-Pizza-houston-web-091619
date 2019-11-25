import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    // console.log(this.props.pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.pizzas.map( (pizza) => 
            <Pizza key={pizza.id}
            size = {pizza.size}
            id = {pizza.id}
            topping= {pizza.topping}
            vegetarian= {pizza.vegetarian}
            masterPizza={this.props.masterPizza}
            /> 
            )}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
