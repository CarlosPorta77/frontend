import React from 'react'

import './ProductoConstruido.css'

const ProductoConstruido = (props) => {
    return(
        <div className="wrapper-row">
                <div className="item">{props.nombre}</div>
                <div className="item-1">{props.categoria}</div>
                <div className="item-1">{props.stock}</div>
        </div>	

    )
}

export default ProductoConstruido 