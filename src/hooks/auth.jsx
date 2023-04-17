import { createContext, useContext, useEffect, useState } from "react";
import dFetch from "../axios/config";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ username, password }) {
    try {
      const response = await dFetch.post("/auth", {
        username,
        password,
      });
      const { token } = response.data;
      dFetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token });
      localStorage.setItem("@checkpoint-2:token", token);
    } catch (error) {
      alert("Erro ao tentar logar");
    }
  }

  function signOut() {
    localStorage.removeItem("@checkpoint-2:token");
    setData({});
  }
  useEffect(() => {
    const token = localStorage.getItem("@checkpoint-2:token");
    if (token) {
      dFetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, userToken: data.token, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
