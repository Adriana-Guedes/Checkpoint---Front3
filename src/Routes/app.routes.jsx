
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Detail from "./Detail"
import App from "../App"






export function AppRoutes(){
    return (
        <Routes>

            <Route path="/" 
             element={<App/>} >
            
                   <Route path="/"
                   element={<Home/>} />


                    <Route path="/home"
                   element={<Home/>} />

                  <Route path="/dentista/:id"
                   element={<Detail/>} />


            </Route>
 
        </Routes>

    )
}