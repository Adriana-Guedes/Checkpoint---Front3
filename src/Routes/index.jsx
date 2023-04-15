import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";


export function Routes(){
    
    
    //pra chamar somente a função signIn e o token
    const {userToken} = useAuth();



    return (
        <BrowserRouter>
        {
            //se verdadeira(validação ir para appRouter) se não login
            userToken ? <AppRoutes/> :    <AuthRoutes/>     
             }
         
        
        </BrowserRouter>
    );
}