import React, { Component } from 'react'
import ProductoConstruido from './ProductoConstruido'
import axios from 'axios'

import './Producto.css'

class Producto extends Component {
  state = {
    productos: []
  }

  constructor(props) {
    super(props)
    console.log('paso por constructor de PRODCTOS')
  }

  componentDidMount() {
    axios
      .get('https://obscure-coast-56975.herokuapp.com/producto')
      .then(resultados => {
        const { data } = resultados
        this.setState({
          productos: data
        })
        console.log(this.state)
      })
      .catch(error => {
        console.log('error' + error)
      })
  }

  render() {
    return (
      <div className="Producto">
        {this.state.productos.map(producto => {
          return (
            <ProductoConstruido
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              categoria={producto.categoriaId}
              stock={producto.stock}
            />
          )
        })}
      </div>
    )
  }
}

export default Producto
