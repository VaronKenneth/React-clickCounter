import React    from "react";
import '../Stylesheets/Boton.css'

function Boton({ texto, esBotonDeClick, manejarClick }) {

  return(
    <button 
      className={esBotonDeClick ? 'boton-click' : 'boton-reinicio'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );

};

export default Boton;