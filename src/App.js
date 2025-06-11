import './App.css';
import imagenDeLogo from './imagenes/Together they climb the roller coaster.png';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import React, {useState} from 'react';



function App() {

  const [numClics, setNumClics] = useState(0);

const onClick = () => {
  setNumClics(numClics + 1);
}



const reiniciarClick = () => {
  setNumClics(0);
}


  return (
    <div className="App">
      <div className=" imagen-logo-container">
        <img className='imagen-logo' src={imagenDeLogo} 
        alt="imagen de logo"/>
                </div>

      <Contador numClics={numClics}/>


        <Boton texto="click me" 
        esBotonDeClic={true} 
        onClick={onClick}/>

          <br />

        <Boton texto="reiniciar"
        esBotonDeClic={false}
        onClick={reiniciarClick}/>



      


            </div>
  );
}


export default App;
