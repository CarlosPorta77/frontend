import React, {Component} from 'react';
import axios from 'axios';


class ProductoCreate extends Component {

  state = {
    error: null,
    errorUpdate: null,
    nombreInput: '',
    id: '',
    productos: []
  };

  constructor(props){
    super(props);

    axios.get('https://obscure-coast-56975.herokuapp.com/producto')
      .then(result => {
        const {data} = result;
        this.setState({
          clientes: data
        });
      });
  }

  getNombre = (event) => {
    const nombreInput = event.target.value;
    this.setState({nombreInput});
  };



  saveProducto = () => {
    const {nombreInput} = this.state;
    axios.post('https://obscure-coast-56975.herokuapp.com/producto', {
      nombre: nombreInput
    }).then(response => {
      this.props.history.push("/");
    })
    .catch(error => {
      this.setState({error: error.message});
    })
  };



  render() {
    const error = (<label>{this.state.error}</label>);
    const errorUpdate = (<label>{this.state.errorUpdate}</label>);
    return (
      <div className="Form">
        <h2>Crear Un Producto Nuevo</h2>
        <br/>
        <input placeholder="Nombre " onChange={this.getNombre} value={this.state.nombreInput} />
        <br/>
        <button onClick={this.saveProducto}>Guardar</button>
        {this.state.error ? error : ''}
        {this.state.errorUpdate ? errorUpdate : ''}
      </div>
    );
  }
}

export default ProductoCreate;