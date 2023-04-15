//para validação de usuario

import { createContext, useContext, useEffect, useState } from "react";
import dFetch from "../axios/config";

export const AuthContext = createContext ([]);
//componente 
function AuthProvider({children}){
    
    const [data,setData] = useState({})

    //função de autenticação de usuario
    async function signIn({username,password}){
        try {
            const response =  await dFetch.post("/auth", {
                // o que vai ser utilizado no envio dos dados
                username, 
                password,
            });
            const {token} = response.data;
            //coloca o token de forma automatica em todas as requisições
            dFetch.defaults.headers.common["Authorizarion"] = `Bearer ${token}`;
            setData ({token});
            //salvando os dados no localStorage (nome de identificação , key , value)
            localStorage.setItem("@checkpoint-2:token",token)
            
        } catch (error) {

            alert("Erro ao tentar logar");
            
        }
    }

    useEffect(() => {
                                          //identificação do token
        const token = localStorage.getItem("@checkpoint-2:token");
        if(token){
            dFetch.defaults.headers.common["Authorizarion"] = `Bearer ${token}`;
            setData ({token});
        }
    },[]);



    //retorno do contexto com o seu filho, o filho será acesso a todo o projeto
    return (
        <AuthContext.Provider value={{signIn, userToken: data.token}} >
            {children}
        </AuthContext.Provider>
    );

   
    }
    function useAuth(){
        const context = useContext(AuthContext)
        return context;
}

export {AuthProvider,useAuth};