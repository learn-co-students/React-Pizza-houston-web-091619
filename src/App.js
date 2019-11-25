import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    vegetarianInput: false, 
    sizeInput: 'small',
    toppingInput: '',
    selectedPizza: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then( res => res.json())
    .then(pizzas => this.setState({ pizzas: pizzas }))
  }

  // changePizza = (pizza) => {
  //   this.setState({
  //     selectedPizza: pizza
  //   })
  // }

  updatePizzaList = () => {
    this.setState({
      pizzas: this.state.pizzas.map( pizza => { 
        if(pizza.id === this.state.selectedPizza.id) {
          return this.state.selectedPizza
        }
        return pizza
      })
    })
  }


  masterPizza = (pizza) => {
    // console.log(pizza)
    this.setState({ 
      selectedPizza: pizza,
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza}
        masterPizza={this.masterPizza}
        updatePizzaList={this.updatePizzaList}
        />
        <PizzaList 
        pizzas={this.state.pizzas}
        masterPizza={this.masterPizza}
        />
      </Fragment>
    );
  }
}

export default App;
