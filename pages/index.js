import BarraNavegacion from "../component/barra_navegacion.component"
import Login from "../component/inicio_sesion.component"
import Footer from "../component/footer.component"
import { useState } from "react"

export default function Home() 
{
    const [errorLogin, setErrorLogin] = useState(false)

    const loginHandler = (email, password) =>
    {
        if(email != "" && password != "")
        {
            location.href = "/main"
        }
        else
        {
            console.log("Error")
            setErrorLogin(true)
        }
    }

    return <div>
        <div>
            <header>
                <h1>CRYPTO-NITA</h1>
            </header>
            <BarraNavegacion/>
        </div>
        <div>
            <Login onLogin={loginHandler} error={errorLogin}/>
            <Footer/>
        </div>
    </div>
}
