
import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import dFetch from "../axios/config";
import { useParams } from "react-router-dom";

const DetailCard = () => {

  const [data, setData ] = useState(null);
  const params = useParams();



  useEffect(() => {

    async function getDentista() {
      try {

        const response = await dFetch.get(`/dentista?matricula=${params.id}`);
        setData(response.data);
        
      } catch (error) {
        alert("Não foi possivel acessar os dados");
      }

    }
    
    getDentista();

  }, []);

  return (
    
    <>
      <h1>Detail about Dentist {data?.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {data?.nome}</li>
              <li className="list-group-item">
                Sobrenome: {data?.sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {data?.usuario.username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
