import React from 'react'
import Cliente from './Cliente';
import Producto from './Producto';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './Header.css';

const header = (props) => {
    return (
        <Router>
            <div className="App">
                <div className="header">
                    <div className="wrapper-rutas">
                        <div className="ruta"><Link to={'/clientes'}>Lista Clientes</Link></div>
                        <div className="ruta"><Link to={'/productos'}>Lista Productos</Link></div>

                    </div>
                </div>
                <Switch>
                    {/*<Route path="/categoryCreate" component={CategoryCreate}/>
                    <Route path="/clientCreate/:clientId?" component={ClientCreate}/>
                    <Route path="/productCreate/:productId?" component={ProductCreate}/>*/}
                    <Route path="/clientes" component={Cliente}/>
                    <Route path="/productos" component={Producto}/> 
                    {/* <Route path="/productsDeleteAll/:productId?" component={ProductsDeleteAll}/> 
                    <Route path="/purchase" component={Purchase}/>*/}
                </Switch>
            </div>
        </Router>
    )
};

export default header;
