import React, { Component } from 'react'
import ClienteConstruido from './ClienteConstruido'
import axios from 'axios'

import './Cliente.css'

class Cliente extends Component {
  state = {
    clientes: []
  }

  constructor(props) {
    super(props)
    console.log('paso por constructor de CLIENTES')
  }

  componentDidMount() {
    axios
      .get('https://obscure-coast-56975.herokuapp.com/cliente')
      .then(resultados => {
        const { data } = resultados
        this.setState({
          clientes: data
        })
        console.log(this.state)
      })
      .catch(error => {
        console.log('error' + error)
      })
  }

  render() {
    return (
      <div className="wrapper-cliente">
        {this.state.clientes.map(cliente => {
          return (
            <ClienteConstruido
              key={cliente.id}
              id={cliente.id}
              nombre={cliente.nombre}
            />
          )
        })}
      </div>
    )
  }
}

export default Cliente
