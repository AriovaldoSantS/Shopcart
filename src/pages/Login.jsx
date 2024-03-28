import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Login() {
    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    function handleClick() {
        if (password.length >= 8) {
            navigate('/products')
        }

    }

    return (
        <div>

            <h1>LOGO</h1>
            <label htmlFor=""><input placeholder="Email" type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} /></label>
            <br />
            <label htmlFor=""><input placeholder="Senha" onChange={({ target: { value } }) => setPassword(value)} type="password" /></label>

            <br /> <br />
            <button disabled={!(password.length >= 8)} onClick={handleClick} >Login</button>


        </div>
    )



}

export default Login