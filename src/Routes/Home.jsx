import dFetch from "../axios/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";


const Home = () => {
    //estado (variavel, e função que atualiza essa variavel)
    const [dentistas, setDentistas] = useState([]);


    const getDentistas= async () =>{

    try{
      /*dFetch encontra-se na pasta axios arquivo config, onde lá
      há a url padrão sem o endpoint, não sendo mais necessário a url inteira.

     Aqui necessário dizer o que precisa esperar await ( fetch) = esperar o fetch*/
     const response = await dFetch.get("/dentista");//acesso apenas aos endpoints
     
     const data = response.data;

      //setando a variavel dentistas com o que voltou da api
       setDentistas(data);
       

    }catch(erro){
      //mostrar o erro pro ususario
      alert("Erro ao buscar dados");
    }
  }

  useEffect(() => {
    getDentistas();
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    

  }, []);//para executar apenas uma vez no load da pagina


  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {
          dentistas.map((dentista) => 
          {
            return <Card data = {dentista} />
          }
           )
        }
        
       
      </div>
    </>
  );
};

export default Home;
