
import {Routes, Route} from "react-router-dom"
import Contact from "./Login"


//rota de Contact (login) então no barra vai para login e no /login

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" 
                element={<Contact/>}  />
            
            <Route path="/login" 
                element={<Contact/>}  />


        </Routes>

    )
}