import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const pizzaURL = 'http://localhost:3000/pizzas/'

class App extends Component {
  constructor(){
    super()
    this.state={
      pizza:[],
      displayPizza:[],
      currentEdit:{}
    }
  }

  componentDidMount(){
    fetch(pizzaURL)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        pizza:data,
        displayPizza:data
      }
    )})
  }

  handleEdit = (pizza)=>{
    this.setState({
      currentEdit:pizza
    })
  }

  editPizza = (pizzaID) =>{

    let pizzas = this.state.displayPizza.map(pizza => {
      if(pizza.id === pizzaID){
        return {...pizza, ...this.state.currentEdit}
      }
      return pizza
    })

    this.setState({
      displayPizza: pizzas
    })

    fetch(`pizzaURL${pizzaID}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        pizza: this.state.currentEdit
      })
    })
  }

  handleTopping = (topping) =>{
    this.setState({
      currentEdit:{
        ...this.state.currentEdit,topping:topping
      }
    })
  }

  handleSize = (size)=>{
    this.setState({
      currentEdit:{
        ...this.state.currentEdit,size:size
      }
    })
  }

  handleVegan = (isVegan)=>{
    this.setState({
      currentEdit:{
      ...this.state.currentEdit,vegetarian:!isVegan
    }
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza={this.state.currentEdit}
          editPizza={this.editPizza}
          handleTopping={this.handleTopping}
          handleSize={this.handleSize}
          handleVegan={this.handleVegan}
          />
        <PizzaList
          pizzas={this.state.displayPizza}
          handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
