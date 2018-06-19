import React, { Component } from 'react';
import CategoriaConstruida from './CategoriaConstruida'
import axios from 'axios'

class Categoria extends Component {

    state = { 
      categorias : [],
    }
  
    constructor(props) {
      super(props)
      console.log("paso por constructor de CATEGORIA")
    }
  
    componentDidMount() {
      axios.get("https://obscure-coast-56975.herokuapp.com/categoria")
      .then(resultados => {
        const {data} = resultados
        this.setState({
          categorias : data
        })
        console.log(this.state)
      })
      .catch(error =>{
        console.log("error" + error)
      })
      
    }

    render() {
        return (
            <div className="Categoria">
             {this.state.categorias.map((categoria) => {
                return (
                 <CategoriaConstruida
                    key = {categoria.id}
                     id = {categoria.id}
                     nombre = {categoria.nombre}
                 />
                )
            })}
            </div>
        );
      }
}
  



export default Categoria 