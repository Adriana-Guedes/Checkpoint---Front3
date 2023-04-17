
import {Routes, Route} from "react-router-dom"
import Contact from "./Login"




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