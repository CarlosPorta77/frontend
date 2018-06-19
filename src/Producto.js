import React, { Component } from 'react';
import ProductoConstruido from './ProductoConstruido'
import axios from 'axios'

import './Producto.css';
class Producto extends Component {

    state = { 
      productos : [],
    }
  
    constructor(props) {
      super(props)
      console.log("paso por constructor de PRODUCTOS")
    }
  
    componentDidMount() {
      axios.get("https://obscure-coast-56975.herokuapp.com/producto")
      .then(resultados => {
        const {data} = resultados
        this.setState({
          productos : data
        })
        console.log(this.state)
      })
      .catch(error =>{
        console.log("error" + error)
      })
      
    }

    render() {
        return (
            <div className="wrapper-producto">
             {this.state.productos.map((producto) => {
                return (
                 <ProductoConstruido
                    key = {producto.id}
                     id = {producto.id}
                     nombre = {producto.nombre}
                     cateogoria = {producto.categoria}
                 />
                )
            })}
            </div>
        );
      }
}
  



export default Producto 