import React from 'react'

const ProductoConstruido = (props) => {
    return(
        <div>
            <div>
                <span>{props.nombre}</span>
                <h5>Categoría:</h5>
                <span>{props.categoria}</span>
                <h5>Stock:</h5>
                <span>{props.stock}</span>
            </div>
        </div>	

    )
}

export default ProductoConstruido 