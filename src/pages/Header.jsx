import { useState } from "react"
function Header() {

    const [categories, setCategories] = useState([])

    return (
        <h1>
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
            )}</h1>
    )

}

export default Header