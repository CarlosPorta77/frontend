import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente from './Cliente.js';
import axios from 'axios'

class App extends Component {

  state = { 
    clientes : []
  }

  constructor(props) {
    super(props)
    console.log("paso por constructor")
  }

  componentDidMount() {
    axios.get("https://obscure-coast-56975.herokuapp.com/cliente")
    .then(resultados => {
      const {data} = resultados
      this.setState({
        clientes : data
      })
      console.log(this.state)
    })
    .catch(error =>{
      console.log("error" + error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        </header>
        <p className="App-intro"></p>  
          {this.state.clientes.map((cliente) => {
            return (
              <Cliente 
                key = {cliente.id}
                id = {cliente.id}
                nombre = {cliente.nombre}
              />
          )
          })}
          
        
      </div>
    );
  }
}

export default App;
