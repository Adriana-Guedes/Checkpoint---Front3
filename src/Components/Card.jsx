import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({data}) => {
  console.log(data);

  return (
    //escreva um código para a tela ficar em dark mode
    <>
    
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentista/${data.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{data.nome} {data.sobrenome}  </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
