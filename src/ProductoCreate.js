import React, {Component} from 'react';
import axios from 'axios';



class ProductoCreate extends Component {

  state = {
    error: null,
    errorUpdate: null,
    nombreInput: '',
    stockInput: '',
    categoriaInput: '',
    id: '',
    productos: []
  };

  constructor(props){
    super(props);

    axios.get('https://obscure-coast-56975.herokuapp.com/producto')
      .then(result => {
        const {data} = result;
        this.setState({
          productos: data
        });
      });
  }

  getNombre = (event) => {
    const nombreInput = event.target.value;
    this.setState({nombreInput});
  };

  getStock = (event) => {
    const stockInput = event.target.value;
    this.setState({stockInput});
  };

  getCategoria = (event) => {
    const categoria_ID = event.target.value;
    this.setState({categoriaInput: categoria_ID});
  };

  saveClient = () => {
    const {nombreInput, stockInput, categoriaInput} = this.state;
    axios.post('https://obscure-coast-56975.herokuapp.com/producto', {
      nombre: nombreInput,
      stock: stockInput,
      categoriaID : categoriaInput
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
      <h2>Agregar Un Producto Nuevo</h2>
        <br/>
        <input placeholder="Nombre " onChange={this.getNombre} value={this.state.nombreInput} />

        <input placeholder="Stock" onChange={this.getStock} value={this.state.stockInput} />

        <select className="dropdown" onChange={this.getCategoriaId}>
          {
            this.state.productos.map((producto,index) => <option key={index} value={producto.id}>{producto.nombre}</option>)

          }
        </select>
        <br/>
        <button onClick={this.saveClient}>Guardar</button>
        {this.state.error ? error : ''}
        {this.state.errorUpdate ? errorUpdate : ''}
      </div>
    );
  }
}

export default ProductoCreate;