import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


function Products() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);


    return (
        <div>
            <a id='product'>
                {data.map(product => (
                    <>
                        <button onClick={() => navigate('/details')} >
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>R$ {product.price}</p>
                            <button>adicionar</button>
                            <button>remover</button>
                        </button>

                    </>
                ))}


            </a>

            <button onClick={() => navigate(-1)}>Voltar</button>

        </div >
    )

}
export default Products