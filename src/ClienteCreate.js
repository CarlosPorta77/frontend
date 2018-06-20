import React, { Component } from 'react'
import axios from 'axios'

import './ClienteCreate.css'

class ClienteCreate extends Component {
  state = {
    error: null,
    errorUpdate: null,
    nombreInput: '',
    id: '',
    clientes: []
  }

  constructor(props) {
    super(props)

    axios
      .get('https://obscure-coast-56975.herokuapp.com/cliente')
      .then(result => {
        const { data } = result
        this.setState({
          clientes: data
        })
      })
  }

  getNombre = event => {
    const nombreInput = event.target.value
    this.setState({ nombreInput })
  }

  saveClient = () => {
    const { nombreInput } = this.state
    axios
      .post('https://obscure-coast-56975.herokuapp.com/cliente', {
        nombre: nombreInput
      })
      .then(response => {
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  render() {
    const error = <label>{this.state.error}</label>
    const errorUpdate = <label>{this.state.errorUpdate}</label>
    return (
      <div className="Form wrapper-create-client">
        <h2>Crear Un Cliente Nuevo</h2>
        <br />
        <div class="new-client-container">
          <input
            class="input-new-client"
            placeholder="Nombre "
            onChange={this.getNombre}
            value={this.state.nombreInput}
          />
          <br />
          <button class="button-save" onClick={this.saveClient}>
            Guardar
          </button>
        </div>
        {this.state.error ? error : ''}
        {this.state.errorUpdate ? errorUpdate : ''}
      </div>
    )
  }
}

export default ClienteCreate
