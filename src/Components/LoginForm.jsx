import { useState } from "react";
import styles from "./Form.module.css";
import { useAuth } from "../hooks/auth";
//estado para guardar o que o usuario digitar( login e senha)
const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useAuth();



  const handleSubmit = (e) => {
    // para evitar que o submit fique toda hora atualizando o formulario
    e.preventDefault();
    signIn({ 
      //renomeando login, pois a função só recebe username
      username: login,
      password,

  });
    
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            /*função para guardar os digitado pelo usuario
             + função para atualizar o estado do login, funçao*/
            onChange={(event) => setLogin(event.target.value)}

            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              /*função para guardar os digitado pelo usuario
             + função para atualizar o estado do password, funçao*/
            onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
