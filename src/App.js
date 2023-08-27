import './App.css'
import { useState } from 'react';


import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import SecaoEmprego from './componentes/SecaoExperienciaTrabalho';
import Card from './componentes/Card';
import Rodape from './componentes/Rodape';

function App() {
  const [tema,setTema]=useState('claro')
  return (
    <div className="">
      <header className="">
      < Topo tema={tema} setState={setTema}/>
      </header>
      <Banner/>
      <SecaoEmprego/>
      <Card/>
      <Rodape/>

    </div>
  );
}

export default App;
