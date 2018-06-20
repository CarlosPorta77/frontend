import React from 'react'
import Cliente from './Cliente'
import Producto from './Producto'
import Categoria from './Categoria'
import ClienteCreate from './ClienteCreate'
import ProductoCreate from './ProductoCreate'
import CategoriaCreate from './CategoriaCreate'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './Header.css'

const header = props => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="wrapper-rutas">
            <div className="ruta">
              <Link to={'/clientes'}>Lista Clientes</Link>
            </div>
            <div className="ruta">
              <Link to={'/productos'}>Lista Productos</Link>
            </div>
            <div className="ruta">
              <Link to={'/categorias'}>Lista Categorias</Link>
            </div>
            <div className="ruta">
              <Link to={'/crear_cliente'}>Crear Cliente</Link>
            </div>
            <div className="ruta">
              <Link to={'/crear_producto'}>Crear Poducto</Link>
            </div>
            <div className="ruta">
              <Link to={'/crear_categoria'}>Crear Categoria</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/crear_categoria" component={CategoriaCreate}/>
          <Route path="/clientes" component={Cliente} />
          <Route path="/productos" component={Producto} />
          <Route path="/categorias" component={Categoria} />
          <Route path="/crear_cliente/:clientId?" component={ClienteCreate} />
          <Route path="/crear_produto/:productoId?"component={ProductoCreate}/>
          {/* <Route path="/productsDeleteAll/:productId?" component={ProductsDeleteAll}/> 
                    <Route path="/purchase" component={Purchase}/>*/}
        </Switch>
      </div>
    </Router>
  )
}

export default header
