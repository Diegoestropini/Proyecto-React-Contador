import './App.css';
import imagenDeLogo from './imagenes/logo.png';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import React, { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const onClick = () => {
    setNumClics((valorActual) => valorActual + 1);
  };

  const reiniciarClick = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="app-card">
        <header className="app-header">
          <div className="imagen-logo-container">
            <img className="imagen-logo" src={imagenDeLogo} alt="Logo de la app" />
          </div>
          <div className="app-text">
            <p className="app-eyebrow">Contador interactivo</p>
            <h1 className="app-title">Cuenta cada clic con claridad</h1>
            <p className="app-subtitle">
              Una experiencia simple y pulida para llevar el control de tus acciones.
            </p>
          </div>
        </header>

        <main className="app-main">
          <Contador numClics={numClics} />
          <div className="app-actions">
            <Boton texto="Incrementar" esBotonDeClic={true} onClick={onClick} />
            <Boton texto="Reiniciar" esBotonDeClic={false} onClick={reiniciarClick} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
