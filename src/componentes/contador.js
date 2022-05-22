import React from "react";
import "../hojas-de-estilo/contador.css";


function Contador( {NumClics } ) {
    return (
        <div className="contador">

            {NumClics}
        </div>
    );
}

export default Contador;
