import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import dFetch from "../axios/config";
import { useNavigate } from "react-router-dom";

const ScheduleForm = () => {
  const [dadosDentistas, setDadosDentistas] = useState(null);
  const [dadosPacientes, setDadosPacientes] = useState(null);
  const [dentista, setDentista] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [dataConsulta, setDataConsulta] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes

    async function getDentistas() {
      try {
        const response = await dFetch.get("/dentista");
        setDadosDentistas(response.data);
      } catch (error) {
        return alert("Não foi possível carregar os dados");
      }
    }
    async function getPacientes() {
      try {
        const response = await dFetch.get("/paciente");
        setDadosPacientes(response.data.body);
      } catch (error) {
        return alert("Não foi possível carregar os dados");
      }
    }
    getDentistas();
    getPacientes();
  }, []);

  const handleSubmit = async (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    event.preventDefault();
    const dentistaSelecionado = dadosDentistas.filter(
      (_dentista) => _dentista.matricula === dentista
    );
    const pacienteSelecionado = dadosPacientes.filter(
      (_paciente) => _paciente.matricula === paciente
    );
    try {
      if (dentista && paciente && dataConsulta) {
        const obj = {
          paciente: pacienteSelecionado[0],
          dentista: dentistaSelecionado[0],
          dataHoraAgendamento: dataConsulta,
        };

        await dFetch.post("/consulta", obj);
        alert("Consulta agendada com sucesso");
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      } else {
        return alert("Não foi possível agendar a consulta");
      }
    }
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                onChange={(event) => setDentista(event.target.value)}
              >
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                <option value="" selected disabled>
                  selecione
                </option>
                {dadosDentistas?.map((dentista) => {
                  return (
                    <option key={dentista.matricula} value={dentista.matricula}>
                      {dentista.nome} {dentista.sobrenome}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                onChange={(event) => setPaciente(event.target.value)}
              >
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                <option value="" selected disabled>
                  selecione
                </option>
                {dadosPacientes?.map((paciente) => {
                  return (
                    <option key={paciente.matricula} value={paciente.matricula}>
                      {paciente.nome} {paciente.sobrenome}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={(event) => setDataConsulta(event.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button className={`btn btn-light ${styles.button}`} type="submit">
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
