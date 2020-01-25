import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './Components/DevItem';
import DevForm from './Components/DevForm';


function App() {
  const [devs, setDevs]=useState([]);
  
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[])

  async function handleAddDev(data){
      const response = await api.post('/devs',data);
      setDevs([...devs, response.data]);
    }
  return (
    <div id="app">
      <aside>
        <strong>
          Cadastrar
        </strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
           <DevItem key={dev._id} dev={dev}>

           </DevItem>
          ))}
          
        </ul>
      </main>
    </div>
  )
}

export default App;

/***
 * Componente : Bloco isolado de Html+css+Js, que não afeta outros componentes
 * 
 * Estado: A forma como as informaçoes mantem em um componente ja que o react n observa as variaveis
 * 
 * Propriedade: Atributos html - Informações do componente pai passa aos filhos 
 * 
 */