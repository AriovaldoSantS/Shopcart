import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Products() {
    const [data, setData] = useState([])
    const [shop, setShop] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)
    const [menuVisible, setMenuVisible] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setData(data)

                const uniqueCategories = [...new Set(data.map(item => item.category))]
                setCategories(uniqueCategories)
            })
    }, [])

    useEffect(() => {

        const price = shop.reduce((total, item) => total + item.price * item.quantity, 0)
        setTotalPrice(price)
    }, [shop])

    const addShop = (product) => {
        const existingItem = shop.find(item => item.id === product.id)
        if (existingItem) {

            const updatedShop = shop.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
            setShop(updatedShop)
        } else {

            setShop([...shop, { ...product, quantity: 1 }])
        }
    }

    const removeItem = (id) => {
        const updatedShop = shop.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
        setShop(updatedShop)
    }

    const filterByCategory = (category) => {
        setSelectedCategory(category)
        toggleMenu()
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const handleCheckout = () => {

        navigate('/shop')
    }

    return (
        <>
            <h3>LOGO</h3>


            <button onClick={toggleMenu}>Categorias</button>
            <br /><br /><br />
            {menuVisible && (
                <div className="menu">

                    <ul>
                        {categories.map(category => (
                            <ul key={category}>
                                <button onClick={() => filterByCategory(category)}>
                                    {category}
                                </button>
                            </ul>
                        ))}
                    </ul>
                </div>
            )}

            <br /><br />
            <div>
                <h2>Carrinho de compras</h2>
                <ul>
                    {shop.map(item => (
                        <li key={item.id}>
                            {item.title} - ${item.price} x {item.quantity}
                            <button onClick={() => removeItem(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
                <p>Total: ${totalPrice}</p>
                <button onClick={handleCheckout}>Finalizar Compra</button>
            </div>
            <br /> <br />

            <div>
                <h4>Produtos</h4>

                {data
                    .filter(product => !selectedCategory || product.category === selectedCategory)
                    .map(product => (
                        <div key={product.id}>
                            <p>{product.title}</p>
                            <button onClick={() => navigate(`/details/${product.id}`)}>
                                <img width='20%' src={product.image} alt={product.title} />
                            </button>
                            <p>Valor: R${product.price}</p>
                            <button onClick={() => addShop(product)}>Adicionar</button>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Products