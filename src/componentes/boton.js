import React from "react";
//importar boton.css, de la carpeta hojas-de-estilo
import "../hojas-de-estilo/boton.css";


function Boton( { texto, esBotonDeClic, onClick } ) {
    return (
        <button
            className={`boton ${esBotonDeClic ? "boton-de-clic" : "boton-de-reiniciar"}`}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}


export default Boton;



